import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import auction from "../../../api/auction";

const AuctionRequestTable = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    auction
      .getAuctionData()
      .then((res) => {
        const auctionsData = res.data.auctionData;
        setAuctions(auctionsData);
        console.log(auctionsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "itemName",
      dataIndex: "itemName",
      key: "itemName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "bidStart",
      dataIndex: "bidStart",
      key: "bidStart",
    },
    {
      title: "bidEnd",
      dataIndex: "bidEnd",
      key: "bidEnd",
    },
    {
      title: "seller",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "startingBid",
      dataIndex: "startingBid",
      key: "startingBid",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;

            if (tag === "accepted") {
              color = "green";
            } else if (tag === "rejected") {
              color = "volcano";
            } else if (tag === "pending") {
              color = "geekblue";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Accept{record.name}</a>
          <a>Reject</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["rejected"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["pending"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["accepted"],
    },
  ];

  // const datas = () => {
  //   return [{ auctions }];
  // };

  return (
    <>
      <div className="auction-request">
        <Table columns={columns} dataSource={data} />;
      </div>
    </>
  );
};

export default AuctionRequestTable;

import React from 'react'
import './style.css'
import { FacebookOutlined, GoogleCircleFilled, LinkedinOutlined, TwitterSquareFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer class="nb-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="about">
              <img src="images/logo.png" class="img-responsive center-block" alt="" />
              <p>We welcome you as our valuable Customer and always dedicated to provide you the best experience in using Mandala and serve in  all condition you Need</p>

              <div class="social-media">
                  <a href="*" className='p-3' title=""><FacebookOutlined /></a>
                  <a href="*"  className='p-3' title=""><TwitterSquareFilled /></a>
                  <a href="*"  className='p-3' title=""><GoogleCircleFilled/></a>
                  <a href="*"  className='p-3' title=""><LinkedinOutlined/></a>
                
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Help Center</h2>
              <ul class="list-unstyled">
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> How to Pay</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> FAQ's</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> Sitemap</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> Delivery Info</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Customer information</h2>
              <ul class="list-unstyled">
                <li><a href="/about" title=""><i class="fa fa-angle-double-right"></i> About Us</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> FAQ's</a></li>
                <li><a href="/login" title=""><i class="fa fa-angle-double-right"></i> Sell Your Items</a></li>
                <li><a href="/contact" title=""><i class="fa fa-angle-double-right"></i> Contact Us</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> RSS</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Security & privacy</h2>
              <ul class="list-unstyled">
                <li><a href="/termsandconditions" title=""><i class="fa fa-angle-double-right"></i> Terms Of Use</a></li>
                <li><a href="/privacyandpolicy" title=""><i class="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> Return / Refund Policy</a></li>
                <li><a href="*" title=""><i class="fa fa-angle-double-right"></i> Store Locations</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-info-single">
              <h2 class="title">Payment</h2>
              <p>We offer our customer easy method after they won bid. We are still underconstruction for our payment system to be available across our customers</p>
            </div>
          </div>
        </div>
      </div>

      <section class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p>Copyright © 2022. Mandala.</p>
            </div>
            <div class="col-sm-6"></div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
import React, { Component } from 'react';
import { render } from 'react-dom';
import "./joblist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {InfoSec} from './InfoSection.elements';

function Joblist () {
  return (
    <>
    <h3 style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: 'white', 
    fontFamily:"American Typewriter, serif",
    fontSize: 50 + "px",
    textAlign: 'center',
    marginTop: 20+"px",
    width:'100%',
    height:'200px'}}>JOB CATEGORIES</h3>
    <InfoSec>
    
    <div className="content">
  <div className="job-role-list">
  <ul>
    <li>
      <input type="radio" name="accordion"/>
        <div className="role-title">
          <h5>
          Analyst
          <span className="mobile-role-count">
          - 4 Open Roles
          </span>
          </h5>
          <div className="role-count">
          4 Open Roles
          </div>
        </div>
          <div className="hidden-content">
            <ul className="job-list">
              <li className="heading">
                <a href="/business" className="row">
                <div className="job-list-info">
                  <span className="job-title">Business Analyst</span>
                  <span href="/business" className="job-desc text">      
                  Bengaluru | Full Time
                  </span>
                </div>
                <i className="icon-arrow-right "></i>
                </a>
              </li>
              <li className="heading">                
                <a href="/jobs/GBMVWh5MSeHe/product-analyst" className="row">
                  <div className="job-list-info">
                    <span className="job-title">Product Analyst</span>
                    <span href="/jobs/GBMVWh5MSeHe/product-analyst" className="job-desc text">                            
                    Bengaluru | Full Time
                    </span>
                  </div>
                  <i className="icon-arrow-right "></i>
                </a>
              </li>
              <li className="heading">    
                <a href="/jobs/yOS9UNf7jZcv/product-analyst-smallcase-publisher" className="row">
                  <div className="job-list-info">
                    <span className="job-title">Product Analyst - smallcase Publisher</span>
                    <span href="/jobs/yOS9UNf7jZcv/product-analyst-smallcase-publisher" className="job-desc text">                            
                    Bengaluru | Full Time
                    </span>
                  </div>
                  <i className="icon-arrow-right "></i>
                </a>
              </li>
                    <li className="heading">    
                        <a href="/jobs/_T4-sJaujf1f/product-analyst-tickertape" className="row">
                        <div className="job-list-info">
                            <span className="job-title">Product Analyst - Tickertape</span>
                            <span href="/jobs/_T4-sJaujf1f/product-analyst-tickertape" className="job-desc text">                            
                            Bengaluru
                            | 
                            Full Time
                            </span>
                        </div>
                        <i className="icon-arrow-right "></i>
                        </a>
                    </li>
            </ul>
          </div>
    </li>

    <li>
      <input type="radio" name="accordion"/>
        <div className="role-title">
          <h5>
          Business
          <span className="mobile-role-count">
          - 3 Open Roles
          </span>
          </h5>
          <div className="role-count">
          3 Open Roles
          </div>
        </div>
        <div className="hidden-content">
          <ul className="job-list">
            <li className="heading">
              <a href="/jobs/iGOw7fa4v3Es/account-manager-smallcase-publisher" className="row">  
                <div className="job-list-info">
                <span className="job-title">Account Manager - smallcase Publisher</span>
                <span href="/jobs/iGOw7fa4v3Es/account-manager-smallcase-publisher" className="job-desc text">
                    
                    Bengaluru
                    | 
                    Full Time
                  </span>
                </div>
                  <i className="icon-arrow-right "></i>
              </a>
</li>

<li className="heading">
  
<a href="/jobs/JjYX-yv4WPR9/avp-vp-manager-onboarding-growth" className="row">
  
  <div className="job-list-info">
	<span className="job-title">AVP/VP - Manager Onboarding &amp; Growth</span>
	<span href="/jobs/JjYX-yv4WPR9/avp-vp-manager-onboarding-growth" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/BCwAJIAqRUOp/business-development-manager-metro-cities" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Business Development Manager (Metro Cities)</span>
	<span href="/jobs/BCwAJIAqRUOp/business-development-manager-metro-cities" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Design
<span className="mobile-role-count">
- 6 Open Roles
</span>
</h5>
<div className="role-count">
6 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/BI2fU1fU0-cM/graphic-design-intern-tickertape" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Graphic design Intern - Tickertape</span>
	<span href="/jobs/BI2fU1fU0-cM/graphic-design-intern-tickertape" className="job-desc text">
      
      Bengaluru
       | 
      Internship
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/eZGY99lfOo9g/graphic-designer-b2b" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Graphic Designer - B2B</span>
	<span href="/jobs/eZGY99lfOo9g/graphic-designer-b2b" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/_RvJRkQPWWA6/graphic-designer-intern" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Graphic Designer - Intern</span>
	<span href="/jobs/_RvJRkQPWWA6/graphic-designer-intern" className="job-desc text">
      
      Bengaluru
       | 
      Internship
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/lwvOqIxuPyCc/product-designer-smallcase-publisher" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Product Designer - smallcase Publisher</span>
	<span href="/jobs/lwvOqIxuPyCc/product-designer-smallcase-publisher" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/4vO-s0esYtE0/senior-graphic-designer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Graphic Designer</span>
	<span href="/jobs/4vO-s0esYtE0/senior-graphic-designer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/nzhAP-4e6IDC/senior-product-designer-tickertape" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Product Designer - Tickertape</span>
	<span href="/jobs/nzhAP-4e6IDC/senior-product-designer-tickertape" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Engineering
<span className="mobile-role-count">
- 11 Open Roles
</span>
</h5>
<div className="role-count">
11 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/tm-gV3NbhmBJ/frontend-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Frontend Engineer</span>
	<span href="/jobs/tm-gV3NbhmBJ/frontend-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

<li className="heading">
  
<a href="/jobs/hYeZwIu4y0Ro/lead-backend-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Lead Backend Engineer</span>
	<span href="/jobs/hYeZwIu4y0Ro/lead-backend-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/OePUioOUIT-B/lead-devops-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Lead DevOps Engineer</span>
	<span href="/jobs/OePUioOUIT-B/lead-devops-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/N251jdWm1ELN/lead-security-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Lead Security Engineer</span>
	<span href="/jobs/N251jdWm1ELN/lead-security-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/WcmptQZihlPC/mobile-engineer-gateway" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Mobile Engineer - Gateway</span>
	<span href="/jobs/WcmptQZihlPC/mobile-engineer-gateway" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/p1d5DTnNBLvL/mobile-engineer-react-native" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Mobile Engineer - React Native</span>
	<span href="/jobs/p1d5DTnNBLvL/mobile-engineer-react-native" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/q0FbYPsl3yLk/qa-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">QA Engineer</span>
	<span href="/jobs/q0FbYPsl3yLk/qa-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

<li className="heading">
  
<a href="/jobs/FLq09LR0JX7z/security-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Security Engineer</span>
	<span href="/jobs/FLq09LR0JX7z/security-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

<li className="heading">
  
<a href="/jobs/1jRtMLcdKeOc/senior-backend-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Backend Engineer</span>
	<span href="/jobs/1jRtMLcdKeOc/senior-backend-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

<li className="heading">
  
<a href="/jobs/Rf4qK6Z6pga2/senior-frontend-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Frontend Engineer</span>
	<span href="/jobs/Rf4qK6Z6pga2/senior-frontend-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/kox3mXjCnyFj/senior-test-qa-engineer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Test/QA Engineer</span>
	<span href="/jobs/kox3mXjCnyFj/senior-test-qa-engineer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Finance
<span className="mobile-role-count">
- 1 Open Roles
</span>
</h5>
<div className="role-count">
1 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/cgkJPBJHcnYG/assistant-manager-finance" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Assistant Manager - Finance</span>
	<span href="/jobs/cgkJPBJHcnYG/assistant-manager-finance" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
People
<span className="mobile-role-count">
- 1 Open Roles
</span>
</h5>
<div className="role-count">
1 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/LeEC_HAoZdZQ/talent-acquisition-specialist-non-technology" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Talent Acquisition specialist - Non Technology</span>
	<span href="/jobs/LeEC_HAoZdZQ/talent-acquisition-specialist-non-technology" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Marketing
<span className="mobile-role-count">
- 5 Open Roles
</span>
</h5>
<div className="role-count">
5 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/N4uHjZpL8fSz/business-development-associate" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Business Development Associate</span>
	<span href="/jobs/N4uHjZpL8fSz/business-development-associate" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/CXqzRuNaI4DB/marketing-associate-partners-referrers" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Marketing Associate - Partners/Referrers</span>
	<span href="/jobs/CXqzRuNaI4DB/marketing-associate-partners-referrers" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/9ZMS3fhYkjTF/performance-marketing-manager-smallcase-b2c" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Performance Marketing Manager - smallcase B2C</span>
	<span href="/jobs/9ZMS3fhYkjTF/performance-marketing-manager-smallcase-b2c" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/V2nbAfyXqgrd/product-marketing-associate-tickertape" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Product Marketing Associate - Tickertape</span>
	<span href="/jobs/V2nbAfyXqgrd/product-marketing-associate-tickertape" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/RVGBCL1JAVWd/social-media-manager" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Social Media Manager</span>
	<span href="/jobs/RVGBCL1JAVWd/social-media-manager" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Product
<span className="mobile-role-count">
- 6 Open Roles
</span>
</h5>
<div className="role-count">
6 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/st7A7X9wsVA5/apm-gateway" className="row">
  
  <div className="job-list-info">
	<span className="job-title">APM - Gateway</span>
	<span href="/jobs/st7A7X9wsVA5/apm-gateway" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/Gp1QaqvX98y-/apm-tickertape" className="row">
  
  <div className="job-list-info">
	<span className="job-title">APM - Tickertape</span>
	<span href="/jobs/Gp1QaqvX98y-/apm-tickertape" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/EQ2_E7kflWrC/associate-product-manager-smallcase-publisher" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Associate Product Manager - smallcase Publisher</span>
	<span href="/jobs/EQ2_E7kflWrC/associate-product-manager-smallcase-publisher" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/rXdZiByIaoNY/associate-product-manager-b2c" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Associate Product Manager- B2C</span>
	<span href="/jobs/rXdZiByIaoNY/associate-product-manager-b2c" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/p83uKe6BvCsX/product-marketing-associate" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Product Marketing Associate</span>
	<span href="/jobs/p83uKe6BvCsX/product-marketing-associate" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/YLom1Dvli9FN/senior-product-manager-broker-platforms" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Senior Product Manager - Broker Platforms</span>
	<span href="/jobs/YLom1Dvli9FN/senior-product-manager-broker-platforms" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Project Management
<span className="mobile-role-count">
- 1 Open Roles
</span>
</h5>
<div className="role-count">
1 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/VQJczYGOAhB6/business-solutions-manager" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Business Solutions Manager </span>
	<span href="/jobs/VQJczYGOAhB6/business-solutions-manager" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Sales
<span className="mobile-role-count">
- 1 Open Roles
</span>
</h5>
<div className="role-count">
1 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">

<li className="heading">
  
<a href="/jobs/G7b4alZRea6C/growth-executive" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Growth Executive</span>
	<span href="/jobs/G7b4alZRea6C/growth-executive" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Writing/Editing
<span className="mobile-role-count">
- 3 Open Roles
</span>
</h5>
<div className="role-count">
3 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">



<li className="heading">
  
<a href="/jobs/bflfuhh80Ci2/associate-copywriter" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Associate Copywriter</span>
	<span href="/jobs/bflfuhh80Ci2/associate-copywriter" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/Yk5gazaP0ZRB/content-manager" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Content Manager</span>
	<span href="/jobs/Yk5gazaP0ZRB/content-manager" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>



<li className="heading">
  
<a href="/jobs/rNcssM_3wHe9/content-writer" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Content Writer</span>
	<span href="/jobs/rNcssM_3wHe9/content-writer" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>

</ul>
</div>
</li>

<li>
<input type="radio" name="accordion"/>
<div className="role-title">
<h5>
Customer Experience
<span className="mobile-role-count">
- 1 Open Roles
</span>
</h5>
<div className="role-count">
1 Open Roles
</div>
</div>
<div className="hidden-content">
<ul className="job-list">


<li className="heading">
  
<a href="/jobs/z2NC5sDXyGF3/product-support-specialist-tickertape" className="row">
  
  <div className="job-list-info">
	<span className="job-title">Product Support Specialist - Tickertape</span>
	<span href="/jobs/z2NC5sDXyGF3/product-support-specialist-tickertape" className="job-desc text">
      
      Bengaluru
       | 
      Full Time
    </span>
  </div>
    <i className="icon-arrow-right "></i>
</a>

</li>


</ul>
</div>
</li>


</ul>
</div>   
</div>   
</InfoSec>
    </>
  );
}

export {Joblist};
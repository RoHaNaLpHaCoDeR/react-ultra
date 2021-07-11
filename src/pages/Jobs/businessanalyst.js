import React from 'react';
// import { Link } from 'react-router-dom';
import "./Businessanalyst.css";
import 'font-awesome/css/font-awesome.min.css'; 

function Businessanalyst() {
  return (
    <>
      <div className="job-details">
        <div className="job-details-header" id="job-details-header">
          <div className="content">
            <a className="link-back" href="/">
            <i className="fas fa-angle-double-left"></i>Analyst
            </a><br/>
        <div className="row">
          <div className="col-xs-8">
            <h1 className="brand-color">Business Analyst</h1>
          <br/>
          <div className="stick-hide-in-mobile  text-color">
          Bengaluru | Full Time
          </div>
          </div>
            <div className="col-xs-4 pull-xs-right text-right">
              <a href="https://forms.gle/moP1H8QJtkH5sSJz6" className="btn btn-primary btn-custom" onclick="showApplicantForm('applicant-form', this, event); return true;">
              Apply Now
              </a>
            </div>
        </div>
      </div>
      <br/>
      </div>
    <div className="job-details-content content">
      <br/><br/>
        <div className="job-details-content-desc">
          <p dir="ltr">smallcase is building a modern investing ecosystem - better investment products & technology platforms 
          for the Indian capital markets - serving over 2M individual investors & India's most trusted & respected financial brands. 
          We are a young, passionate 150+ member team headquartered in Bangalore & are backed by top-tier investors. smallcase has 
          also been recognized in the ecosystem & media as an innovator & change agent.</p>
          <p dir="ltr">We are looking for a Business Analyst to join us at smallcase.</p>
          <p dir="ltr"><strong>Responsibilities</strong></p>
          <p dir="ltr">- Communicate effectively with business partners to understand and explain requirements, and make valuable recommendations</p>
          <p dir="ltr">- Providing business-oriented data solutions by understanding the business requirements</p>
          <p dir="ltr">- Detecting and reporting business anomalies in the data, by building alerting/tracking systems as needed</p>
          <p dir="ltr">- Conducting an in-depth analysis of data to understand business impact, and provide projections for future business decisions</p>
          <p dir="ltr">- Extract, verify and validate crucial business data requirements</p>
          <p dir="ltr"><strong>Requirements</strong></p>
          <p dir="ltr">- Qualified in Math, Statistics, Economics, Computer Science, or other quantitative fields.</p>
          <p dir="ltr">- You are a self-starter: You drive projects with minimal guidance and focus on high impact work.</p>
          <p dir="ltr">- Should be familiar with writing SQL/No SQL queries</p>
          <p dir="ltr">- Ability to be comfortable with ambiguity</p>
          <p dir="ltr">- Strong communicator: You effectively synthesize, visualize, and communicate your ideas to others.</p>
          <p dir="ltr">- Strong business writing skills: You synthesize all the information into short notes that communicates the idea effectively</p>
          <p dir="ltr">- You work effectively with teammates and win credibility quickly.</p>
          <p dir="ltr"><strong>Good to have</strong></p>
          <p dir="ltr">- Experience working with MongoDB</p>
          <p dir="ltr">- Experience working with tools like Mixpanel, Google Analytics, etc.</p>
          <p dir="ltr">- Experience working with Google Apps Script</p>
        </div>
    </div>
</div>
    </>
  );
}

export default Businessanalyst;


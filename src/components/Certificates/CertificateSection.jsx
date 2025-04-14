

import React from 'react';
import './CertificateSection.css';

const certificates = [
  {
    title: 'Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: 'https://drive.google.com/file/d/1oSNPEWW1kk-u18Y_L7mWuWENnfMiPyAI/view',
  },
  {
    title: 'JAVA Certified',
    issuer: 'Hackerrank',
    year: '2024',
    link: 'https://www.hackerrank.com/certificates/b22811db8c0f',
  },
  {
    title: 'SQL Certified',
    issuer: 'Hackerrank',
    year: '2024',
    link: 'https://www.hackerrank.com/certificates/31bd4287ff3e',
  },
  {
    title: 'JavaScript Certified',
    issuer: 'Hackerrank',
    year: '2025',
    link: 'https://udemy.com/certificate/example3',
  },
  {
    title: 'React.JS Certfied',
    issuer: 'Hackerrank',
    year: '2025',
    link: 'https://udemy.com/certificate/example3',
  },
  {
    title: 'Career Edge Young Professional',
    issuer: 'TCSiON',
    year: '2024',
    link: 'https://drive.google.com/file/d/1CirlZxiY8MuF-7zbV4hgj5jy5c0s4zku/view?usp=drivesdk',
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="certificate-section">
      <div className="container">
        <h2 className="section-title">CERTIFICATES</h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-year">{cert.year}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;

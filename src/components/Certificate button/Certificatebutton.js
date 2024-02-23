import React from 'react'
import './CertificateButton.css'
export default function Certificateutton(props) {
    return (
        <div className="certimediadiv">
            <span className = 'certimediaSpan'>
              <div className="certiwrapper">
                <div className="certiicon certiblog">
                  <div className="certitooltip">Click Me</div>
                  <a
                  style={{textDecoration: "none"}}
                    href={props.img}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <p>Certificate...</p>
                  </a>
                </div>
              </div>
      </span>
      </div>
    )
}

import React, { useEffect } from "react";


export default function nav(){

  return(
    <div className="container" style="width: 62px;float: left;background: #ffffff;height: 791px;/*position: fixed;*/padding: 0px;">
    <div className="row" style="margin: -15px;width: 78px;">
        <div className="col-md-12" style="width: 75px;height: auto;color: var(--bs-indigo);background: var(--bs-white);padding: 11px;">
            <div style="background: var(--bs-gray-900);height: 70px;color: var(--bs-blue);width: 66px;"><i className="la la-align-left" style="font-size: 49px;color: var(--bs-gray-500);padding: 6px;margin-top: 8px;"></i></div>
            <div style="height: 250px;background: #ffffff;margin-top: 188px;width: 65px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill" style="margin-left: 20px;margin-top: 27px;color: rgb(0,0,0);">
                    <circle cx="8" cy="8" r="8"></circle>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle" style="margin-left: 20px;margin-top: 27px;color: rgb(0,0,0);">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle" style="margin-left: 20px;margin-top: 27px;color: rgb(0,0,0);">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle" style="margin-left: 20px;margin-top: 27px;color: rgb(0,0,0);">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                </svg></div>
                <h1>Hello</h1>
        </div>
    </div>
</div>
  )
}
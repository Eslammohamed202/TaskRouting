import React from "react";

export default function Footer() {
    return (
        <div className="bg-[#2c3e50] ">
            <div className="flex justify-around p-32">
                <div className="text-center">
                    <h2 className="font-500">location</h2>
                    <p className="text-[#f0f8ff] py-5">2215 John Daniel Drive</p>
                    <p className="text-[#f0f8ff]">Clark, MO 65243</p>
                </div>
                <div className="text-center">
                    <h2>AROUND THE WEB</h2>
                    <div className="m-3 flex items-center justify-between">
                        <i className="fa-brands fa-facebook bg-gray-200 p-3 rounded-full "></i>
                        <i className="fa-brands fa-square-twitter bg-gray-200 p-3 rounded-full"></i>
                        <i className="fa-brands fa-linkedin bg-gray-200 p-3 rounded-full"></i>
                        <i className="fa-solid fa-globe bg-gray-200 p-3 rounded-full"></i>
                    </div>
                </div>
                <div className="text-center">
                    <h2>ABOUT FREELANCER</h2>
                    <p className="text-[#f0f8ff] py-3">Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
                </div>
            </div>
            <div className="text-center bg-[#1a252f] p-8">
                <h4 className="text-[#f0f8ff]">Copyright © Your Website 2021</h4>
            </div>
        </div>
    );
}

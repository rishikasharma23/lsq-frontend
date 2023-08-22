import React from "react";
import UserBoard from "./UserBoard";
import LeadBoard from "./LeadBoard";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
    
    const userData = [
        {
            name: "akshita",
            age: 22,
            dob: 324,
        },
    
        {
            name: "rishika",
            age: 22,
            dob: 32,
    
        },
        {
            name: "rishika 2",
            age: 22,
            dob: 43,
        },
    ];
    const leadData = [
        {
            name: "lead akshita",
            age: 22,
            dob: 324,
        },
        {
            name: "lead rishika",
            age: 22,
            dob: 32,
        },
        {
            name: "lead rishika 2",
            age: 22,
            dob: 43,
        },
    ];
    const location = useLocation();
    
    const isUserActive = location.pathname !== "/lead";
    const isLeadActive = location.pathname === "/lead";

    return (
        <div>
            <p>Admin Dashboard</p>
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/user">
                            <button
                                className={`nav-link ${isUserActive ? 'active' : ''}`}
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected={isUserActive}
                            >
                                Users
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/lead">
                            <button
                                className={`nav-link ${isLeadActive ? 'active' : ''}`}
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected={isLeadActive}
                            >
                                Leads
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className={`tab-pane fade show ${isUserActive ? 'active' : ''}`}
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <UserBoard data={userData} />
                    </div>
                    <div
                        className={`tab-pane fade ${isLeadActive ? 'show active' : ''}`}
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <LeadBoard data={leadData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

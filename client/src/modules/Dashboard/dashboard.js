import React, { useContext, useEffect } from 'react'
import "./dashboard.css"
import DashboardRightBar from '../../components/DashboardRightBar/DashboardRightBar'
import { GlobalContext } from '../../utils/Context'

const Dashboard = () => {

    const {setPage} = useContext(GlobalContext)

    useEffect(() => {
        setPage("Dashboard")
    }, [])

    return (
        <div className="dashboard-container">
            <div className="field">
                <div className="ds-container">
                    <div className="info-sec">
                        {[1,2,3].map(s => (
                            <div className="info-box">
                                <h2>Sec</h2>
                                <p>s</p>
                                <p>Others</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="field">
                <DashboardRightBar />
            </div>
        </div>
    )
}

export default Dashboard

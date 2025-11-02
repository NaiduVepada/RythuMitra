"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi" | "mr" | "te" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.cropAdvisory": "Crop Advisory",
    "nav.smartIrrigation": "Smart Irrigation",
    "nav.knowledgeHub": "Knowledge Hub",
    "nav.farmManagement": "Farm Management",
    "nav.marketPrices": "Market Prices",
    "nav.govSchemes": "Gov. Schemes",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.logout": "Logout",
    
    // Home Page
    "home.hero.title": "Empowering Farmers,",
    "home.hero.subtitle": "Growing Future",
    "home.hero.description": "Your one-stop platform for crop advisory, smart irrigation, market insights, and comprehensive farm management solutions.",
    "home.hero.getStarted": "Get Started",
    "home.hero.contactSupport": "Contact Support",
    "home.services.title": "Our Services",
    "home.services.description": "Comprehensive tools and resources to support every aspect of modern farming",
    "home.stats.farmers": "Registered Farmers",
    "home.stats.crops": "Crop Varieties",
    "home.stats.support": "Expert Support",
    "home.stats.schemes": "Gov. Schemes",
    "home.cta.title": "Ready to Transform Your Farming?",
    "home.cta.description": "Join thousands of farmers who are already using our platform to increase yields and profits.",
    "home.cta.button": "Start Your Journey Today",
    
    // Services
    "service.cropAdvisory.title": "Crop & Soil Advisory",
    "service.cropAdvisory.description": "Get expert recommendations on crop selection, soil health, and pest management tailored to your farm.",
    "service.smartIrrigation.title": "Smart Irrigation",
    "service.smartIrrigation.description": "Optimize water usage with weather-based irrigation recommendations and smart scheduling.",

    // Advisory Page
    "advisory.pageTitle": "Crop Advisory",
    "advisory.pageDescription": "Get expert advice on crop management, pest control, and soil health",
    
    "advisory.crop.title": "Crop Selection",
    "advisory.crop.description": "Get personalized crop recommendations based on soil, climate, and season",
    
    "advisory.pest.title": "Pest Detection",
    "advisory.pest.description": "Upload images to identify pests and get treatment recommendations",
    
    "advisory.disease.title": "Disease Detection",
    "advisory.disease.description": "Upload plant images for automated disease detection and treatment advice",
    
    "advisory.soil.title": "Soil Testing",
    "advisory.soil.description": "Understand soil health and get fertilizer recommendations",

    // Analysis Results
    "analysis.confidence": "Confidence",
    "analysis.treatment": "Recommended Treatment",
    "analysis.description": "Description",
    "analysis.loading": "Analyzing your image...",
    
    // Authentication
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Sign in to your account",
    "auth.login.email": "Email",
    "auth.login.password": "Password",
    "auth.login.rememberMe": "Remember me",
    "auth.login.submit": "Sign In",
    "auth.login.forgotPassword": "Forgot password?",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.register": "Register",
    "auth.login.error": "Invalid email or password",
  "auth.login.success": "Login successful",
    
    "auth.register.title": "Create Account",
    "auth.register.subtitle": "Join our farming community",
    "auth.register.name": "Full Name",
    "auth.register.email": "Email",
    "auth.register.password": "Password",
    "auth.register.confirmPassword": "Confirm Password",
    "auth.register.submit": "Register",
    "auth.register.hasAccount": "Already have an account?",
    "auth.register.login": "Login",
    "auth.register.error.passwordMatch": "Passwords do not match",
    "auth.register.error.generic": "Registration failed",

    // Image Upload
    "upload.instruction.disease": "Upload a clear image of the affected plant part for disease analysis",
    "upload.instruction.pest": "Upload a clear image of the pest or affected area for pest identification",
    "upload.button.disease": "Upload Plant Image",
    "upload.button.pest": "Upload Pest Image",
    "upload.loading": "Analyzing...",
    "upload.error.invalidType": "Please upload an image file",
    "upload.error.tooLarge": "Image must be less than 5MB",
    "upload.error.disease": "Failed to analyze disease. Please try again.",
    "upload.error.pest": "Failed to analyze pest. Please try again.",
    "upload.success.disease": "Disease analysis complete",
    "upload.success.pest": "Pest analysis complete",
    "service.knowledgeHub.title": "Knowledge Hub",
    "service.knowledgeHub.description": "Access farming guides, best practices, and educational resources for sustainable agriculture.",
    "service.farmManagement.title": "Farm Management",
    "service.farmManagement.description": "Track expenses, yields, and farm activities with digital record-keeping and analytics.",
    "service.marketPrices.title": "Market Prices",
    "service.marketPrices.description": "Real-time market rates for crops and commodities to help you get the best prices.",
    "service.govSchemes.title": "Government Schemes",
    "service.govSchemes.description": "Explore subsidies, loans, and support programs available for farmers across India.",
    
    // Auth Pages
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Login to access your farm management dashboard",
    "auth.login.email": "Email Address",
    "auth.login.password": "Password",
    "auth.login.rememberMe": "Remember me",
    "auth.login.button": "Login",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.createAccount": "Create one now",
    "auth.login.error": "Invalid email or password. Please make sure you have already registered an account and try again.",
    
    "auth.register.title": "Create Account",
    "auth.register.subtitle": "Join thousands of farmers using our platform",
    "auth.register.name": "Full Name",
    "auth.register.email": "Email Address",
    "auth.register.password": "Password",
    "auth.register.confirmPassword": "Confirm Password",
    "auth.register.button": "Create Account",
    "auth.register.hasAccount": "Already have an account?",
    "auth.register.loginHere": "Login here",
    "auth.register.success": "Account created! Redirecting to login...",
    "auth.register.error.userExists": "Email already registered",
    "auth.register.error.passwordMatch": "Passwords do not match",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
  },
  hi: {
    // Navbar (Hindi)
    "nav.home": "होम",
    "nav.cropAdvisory": "फसल सलाह",
    "nav.smartIrrigation": "स्मार्ट सिंचाई",
    "nav.knowledgeHub": "ज्ञान केंद्र",
    "nav.farmManagement": "खेती प्रबंधन",
    "nav.marketPrices": "बाजार मूल्य",
    "nav.govSchemes": "सरकारी योजनाएं",
    "nav.contact": "संपर्क",
    "nav.login": "लॉगिन",
    "nav.register": "पंजीकरण",
    "nav.logout": "लॉगआउट",
    
    // Home Page (Hindi)
    "home.hero.title": "किसानों को सशक्त बनाना,",
    "home.hero.subtitle": "भविष्य का निर्माण",
    "home.hero.description": "फसल सलाह, स्मार्ट सिंचाई, बाजार जानकारी, और व्यापक खेती प्रबंधन समाधान के लिए आपका एक-स्टॉप प्लेटफॉर्म।",
    "home.hero.getStarted": "शुरू करें",
    "home.hero.contactSupport": "सहायता संपर्क",
    "home.services.title": "हमारी सेवाएं",
    "home.services.description": "आधुनिक खेती के हर पहलू का समर्थन करने के लिए व्यापक उपकरण और संसाधन",
    "home.stats.farmers": "पंजीकृत किसान",
    "home.stats.crops": "फसल किस्में",
    "home.stats.support": "विशेषज्ञ सहायता",
    "home.stats.schemes": "सरकारी योजनाएं",
    "home.cta.title": "अपनी खेती को बदलने के लिए तैयार हैं?",
    "home.cta.description": "हजारों किसानों में शामिल हों जो पहले से ही हमारे प्लेटफॉर्म का उपयोग करके उपज और लाभ बढ़ा रहे हैं।",
    "home.cta.button": "आज ही अपनी यात्रा शुरू करें",
    
    // Services (Hindi)
    "service.cropAdvisory.title": "फसल और मिट्टी सलाह",
    "service.cropAdvisory.description": "अपने खेत के अनुरूप फसल चयन, मिट्टी स्वास्थ्य, और कीट प्रबंधन पर विशेषज्ञ सिफारिशें प्राप्त करें।",
    "service.smartIrrigation.title": "स्मार्ट सिंचाई",
    "service.smartIrrigation.description": "मौसम-आधारित सिंचाई सिफारिशों और स्मार्ट शेड्यूलिंग के साथ पानी के उपयोग को अनुकूलित करें।",
    "service.knowledgeHub.title": "ज्ञान केंद्र",
    "service.knowledgeHub.description": "सतत कृषि के लिए खेती गाइड, सर्वोत्तम प्रथाओं और शैक्षिक संसाधनों तक पहुंच।",
    "service.farmManagement.title": "खेती प्रबंधन",
    "service.farmManagement.description": "डिजिटल रिकॉर्ड-कीपिंग और विश्लेषण के साथ खर्च, उपज और खेती गतिविधियों को ट्रैक करें।",
    "service.marketPrices.title": "बाजार मूल्य",
    "service.marketPrices.description": "फसलों और वस्तुओं के लिए वास्तविक समय बाजार दरें ताकि आपको सर्वोत्तम मूल्य मिल सके।",
    "service.govSchemes.title": "सरकारी योजनाएं",
    "service.govSchemes.description": "भारत भर में किसानों के लिए उपलब्ध सब्सिडी, ऋण और सहायता कार्यक्रम खोजें।",
    
    // Auth Pages (Hindi)
    "auth.login.title": "स्वागत है",
    "auth.login.subtitle": "अपने खेती प्रबंधन डैशबोर्ड तक पहुंचने के लिए लॉगिन करें",
    "auth.login.email": "ईमेल पता",
    "auth.login.password": "पासवर्ड",
    "auth.login.rememberMe": "मुझे याद रखें",
    "auth.login.button": "लॉगिन करें",
    "auth.login.noAccount": "खाता नहीं है?",
    "auth.login.createAccount": "अभी बनाएं",
    "auth.login.error": "अमान्य ईमेल या पासवर्ड। कृपया सुनिश्चित करें कि आपने पहले से ही एक खाता पंजीकृत किया है और फिर से प्रयास करें।",
  "auth.login.success": "लॉगिन सफल",
    
    "auth.register.title": "खाता बनाएं",
    "auth.register.subtitle": "हमारे प्लेटफॉर्म का उपयोग करने वाले हजारों किसानों में शामिल हों",
    "auth.register.name": "पूरा नाम",
    "auth.register.email": "ईमेल पता",
    "auth.register.password": "पासवर्ड",
    "auth.register.confirmPassword": "पासवर्ड की पुष्टि करें",
    "auth.register.button": "खाता बनाएं",
    "auth.register.hasAccount": "पहले से खाता है?",
    "auth.register.loginHere": "यहाँ लॉगिन करें",
    "auth.register.success": "खाता बनाया गया! लॉगिन पर रीडायरेक्ट कर रहे हैं...",
    "auth.register.error.userExists": "ईमेल पहले से पंजीकृत है",
    "auth.register.error.passwordMatch": "पासवर्ड मेल नहीं खाते",
    
    // Common (Hindi)
    "common.loading": "लोड हो रहा है...",
    "common.error": "एक त्रुटि हुई",
  },
  mr: {
    // Navbar (Marathi)
    "nav.home": "मुख्यपृष्ठ",
    "nav.cropAdvisory": "पीक सल्ला",
    "nav.smartIrrigation": "स्मार्ट सिंचन",
    "nav.knowledgeHub": "ज्ञान केंद्र",
    "nav.farmManagement": "शेती व्यवस्थापन",
    "nav.marketPrices": "बाजार किंमत",
    "nav.govSchemes": "शासकीय योजना",
    "nav.contact": "संपर्क",
    "nav.login": "लॉगिन",
    "nav.register": "नोंदणी",
    "nav.logout": "लॉगआउट",
    
    // Home Page (Marathi)
    "home.hero.title": "शेतकऱ्यांना सक्षम करणे,",
    "home.hero.subtitle": "भविष्य वाढवणे",
    "home.hero.description": "पीक सल्ला, स्मार्ट सिंचन, बाजार माहिती आणि सर्वसमावेशक शेती व्यवस्थापन उपायांसाठी तुमचे एक-स्टॉप प्लॅटफॉर्म.",
    "home.hero.getStarted": "सुरू करा",
    "home.hero.contactSupport": "समर्थन संपर्क",
    "home.services.title": "आमच्या सेवा",
    "home.services.description": "आधुनिक शेतीच्या प्रत्येक पैलूला समर्थन देण्यासाठी सर्वसमावेशक साधने आणि संसाधने",
    "home.stats.farmers": "नोंदणीकृत शेतकरी",
    "home.stats.crops": "पीक प्रकार",
    "home.stats.support": "तज्ञ समर्थन",
    "home.stats.schemes": "शासकीय योजना",
    "home.cta.title": "तुमची शेती बदलण्यासाठी तयार आहात?",
    "home.cta.description": "हजारो शेतकऱ्यांमध्ये सामील व्हा जे आधीच आमच्या प्लॅटफॉर्मचा वापर करून उत्पादन आणि नफा वाढवत आहेत.",
    "home.cta.button": "आज तुमचा प्रवास सुरू करा",
    
    // Services (Marathi)
    "service.cropAdvisory.title": "पीक आणि माती सल्ला",
    "service.cropAdvisory.description": "तुमच्या शेतासाठी योग्य पीक निवड, माती आरोग्य आणि कीटक व्यवस्थापनावर तज्ञ शिफारसी मिळवा.",
    "service.smartIrrigation.title": "स्मार्ट सिंचन",
    "service.smartIrrigation.description": "हवामान-आधारित सिंचन शिफारशी आणि स्मार्ट शेड्यूलिंगसह पाण्याचा वापर अनुकूल करा.",
    "service.knowledgeHub.title": "ज्ञान केंद्र",
    "service.knowledgeHub.description": "शाश्वत शेतीसाठी शेती मार्गदर्शक, सर्वोत्तम पद्धती आणि शैक्षणिक संसाधनांमध्ये प्रवेश मिळवा.",
    "service.farmManagement.title": "शेती व्यवस्थापन",
    "service.farmManagement.description": "डिजिटल रेकॉर्ड-कीपिंग आणि विश्लेषणासह खर्च, उत्पादन आणि शेती क्रियाकलापांचा मागोवा घ्या.",
    "service.marketPrices.title": "बाजार किंमत",
    "service.marketPrices.description": "पिकांसाठी आणि वस्तूंसाठी रिअल-टाइम बाजार दर जेणेकरून तुम्हाला सर्वोत्तम किंमत मिळेल.",
    "service.govSchemes.title": "शासकीय योजना",
    "service.govSchemes.description": "भारतभरातील शेतकऱ्यांसाठी उपलब्ध सबसिडी, कर्ज आणि समर्थन कार्यक्रम शोधा.",
    
    // Auth Pages (Marathi)
    "auth.login.title": "पुन्हा स्वागत आहे",
    "auth.login.subtitle": "तुमच्या शेती व्यवस्थापन डॅशबोर्डमध्ये प्रवेश करण्यासाठी लॉगिन करा",
    "auth.login.email": "ईमेल पत्ता",
    "auth.login.password": "पासवर्ड",
    "auth.login.rememberMe": "मला लक्षात ठेवा",
    "auth.login.button": "लॉगिन करा",
    "auth.login.noAccount": "खाते नाही?",
    "auth.login.createAccount": "आता तयार करा",
    "auth.login.error": "अवैध ईमेल किंवा पासवर्ड. कृपया सुनिश्चित करा की तुम्ही आधीच खाते नोंदणीकृत केले आहे आणि पुन्हा प्रयत्न करा.",
  "auth.login.success": "यशस्वीपणे लॉगिन",
    
    "auth.register.title": "खाते तयार करा",
    "auth.register.subtitle": "आमच्या प्लॅटफॉर्मचा वापर करणाऱ्या हजारो शेतकऱ्यांमध्ये सामील व्हा",
    "auth.register.name": "पूर्ण नाव",
    "auth.register.email": "ईमेल पत्ता",
    "auth.register.password": "पासवर्ड",
    "auth.register.confirmPassword": "पासवर्ड पुष्टी करा",
    "auth.register.button": "खाते तयार करा",
    "auth.register.hasAccount": "आधीच खाते आहे?",
    "auth.register.loginHere": "येथे लॉगिन करा",
    "auth.register.success": "खाते तयार झाले! लॉगिनवर रीडायरेक्ट करत आहे...",
    "auth.register.error.userExists": "ईमेल आधीच नोंदणीकृत आहे",
    "auth.register.error.passwordMatch": "पासवर्ड जुळत नाहीत",
    
    // Common (Marathi)
    "common.loading": "लोड होत आहे...",
    "common.error": "एक त्रुटी आली",
  },
  te: {
    // Navbar (Telugu)
    "nav.home": "హోమ్",
    "nav.cropAdvisory": "పంట సలహా",
    "nav.smartIrrigation": "స్మార్ట్ నీటిపారుదల",
    "nav.knowledgeHub": "జ్ఞాన కేంద్రం",
    "nav.farmManagement": "వ్యవసాయ నిర్వహణ",
    "nav.marketPrices": "మార్కెట్ ధరలు",
    "nav.govSchemes": "ప్రభుత్వ పథకాలు",
    "nav.contact": "సంప్రదింపు",
    "nav.login": "లాగిన్",
    "nav.register": "నమోదు",
    "nav.logout": "లాగ్అవుట్",
    
    // Home Page (Telugu)
    "home.hero.title": "రైతులను శక్తివంతం చేయడం,",
    "home.hero.subtitle": "భవిష్యత్తును పెంపొందించడం",
    "home.hero.description": "పంట సలహా, స్మార్ట్ నీటిపారుదల, మార్కెట్ సమాచారం మరియు సమగ్ర వ్యవసాయ నిర్వహణ పరిష్కారాల కోసం మీ వన్-స్టాప్ ప్లాట్‌ఫారమ్.",
    "home.hero.getStarted": "ప్రారంభించండి",
    "home.hero.contactSupport": "మద్దతు సంప్రదించండి",
    "home.services.title": "మా సేవలు",
    "home.services.description": "ఆధునిక వ్యవసాయం యొక్క ప్రతి అంశానికి మద్దతు ఇవ్వడానికి సమగ్ర సాధనాలు మరియు వనరులు",
    "home.stats.farmers": "నమోదు చేయబడిన రైతులు",
    "home.stats.crops": "పంట రకాలు",
    "home.stats.support": "నిపుణుల మద్దతు",
    "home.stats.schemes": "ప్రభుత్వ పథకాలు",
    "home.cta.title": "మీ వ్యవసాయాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?",
    "home.cta.description": "మా ప్లాట్‌ఫారమ్‌ను ఉపయోగించి దిగుబడి మరియు లాభాలను పెంచుతున్న వేలాది మంది రైతులలో చేరండి.",
    "home.cta.button": "నేడే మీ ప్రయాణాన్ని ప్రారంభించండి",
    
    // Services (Telugu)
    "service.cropAdvisory.title": "పంట మరియు నేల సలహా",
    "service.cropAdvisory.description": "మీ పొలానికి అనుగుణంగా పంట ఎంపిక, నేల ఆరోగ్యం మరియు చీడపురుగుల నిర్వహణపై నిపుణుల సిఫార్సులను పొందండి.",
    "service.smartIrrigation.title": "స్మార్ట్ నీటిపారుదల",
    "service.smartIrrigation.description": "వాతావరణ-ఆధారిత నీటిపారుదల సిఫార్సులు మరియు స్మార్ట్ షెడ్యూలింగ్‌తో నీటి వినియోగాన్ని ఆప్టిమైజ్ చేయండి.",
    "service.knowledgeHub.title": "జ్ఞాన కేంద్రం",
    "service.knowledgeHub.description": "సుస్థిర వ్యవసాయం కోసం వ్యవసాయ మార్గదర్శకాలు, ఉత్తమ పద్ధతులు మరియు విద్యా వనరులను యాక్సెస్ చేయండి.",
    "service.farmManagement.title": "వ్యవసాయ నిర్వహణ",
    "service.farmManagement.description": "డిజిటల్ రికార్డ్-కీపింగ్ మరియు విశ్లేషణతో ఖర్చులు, దిగుబడులు మరియు వ్యవసాయ కార్యకలాపాలను ట్రాక్ చేయండి.",
    "service.marketPrices.title": "మార్కెట్ ధరలు",
    "service.marketPrices.description": "పంటలు మరియు వస్తువుల కోసం రియల్-టైమ్ మార్కెట్ రేట్లు మీకు ఉత్తమ ధరలను పొందడంలో సహాయపడతాయి.",
    "service.govSchemes.title": "ప్రభుత్వ పథకాలు",
    "service.govSchemes.description": "భారతదేశం అంతటా రైతులకు అందుబాటులో ఉన్న సబ్సిడీలు, రుణాలు మరియు మద్దతు కార్యక్రమాలను అన్వేషించండి.",
    
    // Auth Pages (Telugu)
    "auth.login.title": "తిరిగి స్వాగతం",
    "auth.login.subtitle": "మీ వ్యవసాయ నిర్వహణ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడానికి లాగిన్ చేయండి",
    "auth.login.email": "ఇమెయిల్ చిరునామా",
    "auth.login.password": "పాస్‌వర్డ్",
    "auth.login.rememberMe": "నన్ను గుర్తుంచుకో",
    "auth.login.button": "లాగిన్ చేయండి",
    "auth.login.noAccount": "ఖాతా లేదా?",
    "auth.login.createAccount": "ఇప్పుడు సృష్టించండి",
    "auth.login.error": "చెల్లని ఇమెయిల్ లేదా పాస్‌వర్డ్. దయచేసి మీరు ఇప్పటికే ఖాతాను నమోదు చేసుకున్నారని నిర్ధారించుకోండి మరియు మళ్లీ ప్రయత్నించండి.",
    "auth.login.success": "లాగిన్ విజయవంతం",
    
    "auth.register.title": "ఖాతా సృష్టించండి",
    "auth.register.subtitle": "మా ప్లాట్‌ఫారమ్‌ను ఉపయోగిస్తున్న వేలాది మంది రైతులలో చేరండి",
    "auth.register.name": "పూర్తి పేరు",
    "auth.register.email": "ఇమెయిల్ చిరునామా",
    "auth.register.password": "పాస్‌వర్డ్",
    "auth.register.confirmPassword": "పాస్‌వర్డ్‌ను నిర్ధారించండి",
    "auth.register.button": "ఖాతా సృష్టించండి",
    "auth.register.hasAccount": "ఇప్పటికే ఖాతా ఉందా?",
    "auth.register.loginHere": "ఇక్కడ లాగిన్ చేయండి",
    "auth.register.success": "ఖాతా సృష్టించబడింది! లాగిన్‌కు దారితీస్తోంది...",
    "auth.register.error.userExists": "ఇమెయిల్ ఇప్పటికే నమోదు చేయబడింది",
    "auth.register.error.passwordMatch": "పాస్‌వర్డ్‌లు సరిపోలడం లేదు",
    
    // Common (Telugu)
    "common.loading": "లోడ్ అవుతోంది...",
    "common.error": "దోషం సంభవించింది",
  },
  ta: {
    // Navbar (Tamil)
    "nav.home": "முகப்பு",
    "nav.cropAdvisory": "பயிர் ஆலோசனை",
    "nav.smartIrrigation": "ஸ்மார்ட் நீர்ப்பாசனம்",
    "nav.knowledgeHub": "அறிவு மையம்",
    "nav.farmManagement": "பண்ணை மேலாண்மை",
    "nav.marketPrices": "சந்தை விலைகள்",
    "nav.govSchemes": "அரசு திட்டங்கள்",
    "nav.contact": "தொடர்பு",
    "nav.login": "உள்நுழை",
    "nav.register": "பதிவு",
    "nav.logout": "வெளியேறு",
    
    // Home Page (Tamil)
    "home.hero.title": "விவசாயிகளை வலுப்படுத்துதல்,",
    "home.hero.subtitle": "எதிர்காலத்தை வளர்த்தல்",
    "home.hero.description": "பயிர் ஆலோசனை, ஸ்மார்ட் நீர்ப்பாசனம், சந்தை நுண்ணறிவு மற்றும் விரிவான பண்ணை மேலாண்மை தீர்வுகளுக்கான உங்கள் ஒரு-நிறுத்த தளம்.",
    "home.hero.getStarted": "தொடங்குங்கள்",
    "home.hero.contactSupport": "ஆதரவு தொடர்பு",
    "home.services.title": "எங்கள் சேவைகள்",
    "home.services.description": "நவீன விவசாயத்தின் ஒவ்வொரு அம்சத்தையும் ஆதரிக்க விரிவான கருவிகள் மற்றும் வளங்கள்",
    "home.stats.farmers": "பதிவு செய்யப்பட்ட விவசாயிகள்",
    "home.stats.crops": "பயிர் வகைகள்",
    "home.stats.support": "நிபுணர் ஆதரவு",
    "home.stats.schemes": "அரசு திட்டங்கள்",
    "home.cta.title": "உங்கள் விவசாயத்தை மாற்ற தயாரா?",
    "home.cta.description": "ஏற்கனவே எங்கள் தளத்தைப் பயன்படுத்தி விளைச்சல் மற்றும் லாபத்தை அதிகரிக்கும் ஆயிரக்கணக்கான விவசாயிகளுடன் சேரவும்.",
    "home.cta.button": "இன்று உங்கள் பயணத்தைத் தொடங்குங்கள்",
    
    // Services (Tamil)
    "service.cropAdvisory.title": "பயிர் மற்றும் மண் ஆலோசனை",
    "service.cropAdvisory.description": "உங்கள் பண்ணைக்கு ஏற்ற பயிர் தேர்வு, மண் ஆரோக்கியம் மற்றும் பூச்சி மேலாண்மை குறித்த நிபுணர் பரிந்துரைகளைப் பெறுங்கள்.",
    "service.smartIrrigation.title": "ஸ்மார்ட் நீர்ப்பாசனம்",
    "service.smartIrrigation.description": "வானிலை அடிப்படையிலான நீர்ப்பாசன பரிந்துரைகள் மற்றும் ஸ்மார்ட் திட்டமிடல் மூலம் நீர் பயன்பாட்டை மேம்படுத்துங்கள்.",
    "service.knowledgeHub.title": "அறிவு மையம்",
    "service.knowledgeHub.description": "நிலையான விவசாயத்திற்கான விவசாய வழிகாட்டிகள், சிறந்த நடைமுறைகள் மற்றும் கல்வி வளங்களை அணுகவும்.",
    "service.farmManagement.title": "பண்ணை மேலாண்மை",
    "service.farmManagement.description": "டிஜிட்டல் பதிவு வைத்தல் மற்றும் பகுப்பாய்வு மூலம் செலவுகள், விளைச்சல் மற்றும் பண்ணை செயல்பாடுகளைக் கண்காணிக்கவும்.",
    "service.marketPrices.title": "சந்தை விலைகள்",
    "service.marketPrices.description": "பயிர்கள் மற்றும் பொருட்களுக்கான நிகழ்நேர சந்தை விகிதங்கள் உங்களுக்கு சிறந்த விலைகளைப் பெற உதவுகின்றன.",
    "service.govSchemes.title": "அரசு திட்டங்கள்",
    "service.govSchemes.description": "இந்தியா முழுவதும் விவசாயிகளுக்கு கிடைக்கும் மானியங்கள், கடன்கள் மற்றும் ஆதரவு திட்டங்களை ஆராயுங்கள்.",
    
    // Auth Pages (Tamil)
    "auth.login.title": "மீண்டும் வருக",
    "auth.login.subtitle": "உங்கள் பண்ணை மேலாண்மை டாஷ்போர்டை அணுக உள்நுழையவும்",
    "auth.login.email": "மின்னஞ்சல் முகவரி",
    "auth.login.password": "கடவுச்சொல்",
    "auth.login.rememberMe": "என்னை நினைவில் கொள்",
    "auth.login.button": "உள்நுழை",
    "auth.login.noAccount": "கணக்கு இல்லையா?",
    "auth.login.createAccount": "இப்போது உருவாக்கவும்",
    "auth.login.error": "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல். தயவுசெய்து நீங்கள் ஏற்கனவே ஒரு கணக்கைப் பதிவு செய்துள்ளீர்கள் என்பதை உறுதிப்படுத்தி மீண்டும் முயற்சிக்கவும்.",
    "auth.login.success": "உள்நுழைவு வெற்றியடைந்தது",
    
    "auth.register.title": "கணக்கு உருவாக்கவும்",
    "auth.register.subtitle": "எங்கள் தளத்தைப் பயன்படுத்தும் ஆயிரக்கணக்கான விவசாயிகளுடன் சேரவும்",
    "auth.register.name": "முழு பெயர்",
    "auth.register.email": "மின்னஞ்சல் முகவரி",
    "auth.register.password": "கடவுச்சொல்",
    "auth.register.confirmPassword": "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    "auth.register.button": "கணக்கு உருவாக்கவும்",
    "auth.register.hasAccount": "ஏற்கனவே கணக்கு உள்ளதா?",
    "auth.register.loginHere": "இங்கே உள்நுழையவும்",
    "auth.register.success": "கணக்கு உருவாக்கப்பட்டது! உள்நுழைவுக்கு திருப்பிவிடப்படுகிறது...",
    "auth.register.error.userExists": "மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது",
    "auth.register.error.passwordMatch": "கடவுச்சொற்கள் பொருந்தவில்லை",
    
    // Common (Tamil)
    "common.loading": "ஏற்றுகிறது...",
    "common.error": "பிழை ஏற்பட்டது",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

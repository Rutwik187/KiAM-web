import { images } from "../constants"

export const homeProductsData = [
    {
        id: 'home_product-1',
        img: images.product_access_control,
        title: 'Energy Saving',
        desc: "Our IoT Based Energy Monitoring System has saved people up to 25% off their electricity bills by raising their awareness."
    },
    {
        id: 'home_product-2',
        img: images.product_access_control,
        title: 'Access Control',
        desc: "Our IoT Based Energy Monitoring System has saved people up to 25% off their electricity bills by raising their awareness."
    },
    {
        id: 'home_product-3',
        img: images.product_access_control,
        title: 'AMC Services',
        desc: "Our IoT Based Energy Monitoring System has saved people up to 25% off their electricity bills by raising their awareness."
    },
    {
        id: 'home_product-4',
        img: images.product_access_control,
        title: 'Centralized Remote Monitoring',
        desc: "Our IoT Based Energy Monitoring System has saved people up to 25% off their electricity bills by raising their awareness."
    },
]
export const ProductCategories = [
    {
        icon: images.product1Icon,
        name: "Instrusion",
        route: "instrusion"
    },
    {
        icon: images.product1Icon,
        name: "Fire Alarm",
        route: "fire_alarm"
    },
    {
        icon: images.product1Icon,
        name: "security",
        route: "security"
    },
    {
        icon: images.product1Icon,
        name: "Vehicle Tracking",
        route: "vehicle_tracking"
    },
    {
        icon: images.product1Icon,
        name: "Vehicle Tracking",
        route: "vehicle_tracking"
    }

]

export const securityData = [
    {
        icon: images.gpsTracking,
        title: 'Access Controller',
        desc: 'KiAM provides unique security solutions as per the client requirement. We define all essential functionalities through a customer-specific analysis, taking into account all security and safety aspects.Our security concepts are very efficient as we integrate all the elements of a reliable security system. This helps us in designingcustomized solutions for modern company structures and take care of security requirements effectively.With KiAM’s security system, you can relish the benefit of high entrepreneurial flexibility around the clock.',
        boldText: 'With KiAM’s security system, you can relish the benefit of high entrepreneurial flexibility around the clock.',
        primaryImg: images.securityAccessControlPrimaryImg,
        points: ['Visitor Management',
            'Video Surveillance',
            'Security Manager',
            ' Access Control',
            'Biometric Recognition',
            'Offline Solutions'],
        productFeatures: "Hand key, Hand punch, Palm",
        productFeaturesDescription: "KiAM provides diverse access control readers, for instance Handkey, Handpunch and Palm which acts as a key to access the doors. This ensures ease of access to authorized personnel without the hassle of multiple cards and keys.",
        productFeaturesImages: [{
            img: images.securityAccessControlFeatureImg1,
            caption: "Handpunch"
        },
        {
            img: images.securityAccessControlFeatureImg2,
            caption: "HandKey"
        },
        {
            img: images.securityAccessControlFeatureImg3,
            caption: "Palm"
        }
        ]
    },
    {
        icon: images.gpsTracking,
        title: 'Time Attendance',
        desc1: "In the ever-evolving world we live in today, the demand for flexible working hours is constantly on the rise. This has led to the development of intelligent work-time models. To provide your employees with the flexibility of work hours and simultaneously ensuring that your employees are at the peak of their productivity , requires a new approach to record working hours.We provide convenient, flexible and audit-proof Time & Attendance recording systems.",
        desc2: "Our mobile application and web solution precisely documents the timestamps which can be accessed by the authorized personnel anytime, anywhere. We also incorporate attendance management for on-field employees and employees deployed on different sites.",
        primaryImg: images.securityTimelyAttendance,
        points: ['Automatic Schedule Optimization',
            ' Time Recording',
            'Time Management',
            ' Personnel Scheduling',
            'Demand Forecasting',
            'Productivity Analysis',],
    },
    {
        icon: images.gpsTracking,
        title: 'Biometric Devices ',
        desc: "Biometric solutions can be easily integrated into modern IT infrastructures and existing access control systems. Fingerprint recognition is the easy, affordable and reliable way to record attendance since it is unique to every person and cannot be forged.",
        img: images.securityBiometricDevices,
        technologyPoints: ['3D Touchless 120 Surround',
            '2D+ Multispectral', '2D Optical Capacitive',
            '2D Face + Iris tactile', 'Thermal sensor',
            'Hand geometry recognition', 'Vein pattern recognition'],
        optionsAvailabilityPoints: ['Portable',
            'Heavy Duty IP65', 'In/Outdoor',
            ' Wall/Flush Mount'],
        keyFeaturesPoints: ['Location : PAN India',
            'Retrofit to existing readers & credentials',
            'ERP Integration',
            'IN OUT attendance report',
            'Multi access Zone structure.',
            'Biometric Access System with dual authentication for currency chest.',
            'CRA/CIT person tracking with CA/CP third party employee attendance system.',
            'Email Notification for unauthorized person access',
            'Attendance reports.',
            'Planning for Elevator integration & employee SSO']

    },
    {
        icon: images.gpsTracking,
        title: 'Access Cards',
        desc: "HID access cards enable proximity technology in its everyday functions. Contactless smart cards have an embedded antenna inside the card that enables communication with the reader without the need of physical contact. RFID, RFIC and MIFARE cards are all contactless cards which do not require insertion of the card in the slot.",
        img: images.securityAccessControl,
        points: ['RFID',
            'Smart Card',
            'HID Proximity',
            'Mifare Cards']

    },
    {
        icon: images.gpsTracking,
        title: 'Electronic Locks and Doors',
        desc: "HID access cards enable proximity technology in its everyday functions. Contactless smart cards have an embedded antenna inside the card that enables communication with the reader without the need of physical contact. RFID, RFIC and MIFARE cards are all contactless cards which do not require insertion of the card in the slot.",
        img: images.securityAccessControl,
        points: ['RFID',
            'Smart Card',
            'HID Proximity',
            'Mifare Cards']

    },
    {
        icon: images.gpsTracking,
        title: 'Visitor management'
    },
    {
        icon: images.gpsTracking,
        title: 'Lift Access Control'
    },
    {
        icon: images.gpsTracking,
        title: 'Door Interlocking Services'
    }

]
import { images } from "../constants"
import energy_system from "../assets/product1.png"
import cctv_product from "../assets/home-cctv.png"
import intrusion_product from "../assets/home-intrusion.png"

import categoryIcon1 from "../assets/access-control-category-icon.svg"
import categoryIcon2 from "../assets/intrusion-category-icon.svg"
import categoryIcon3 from "../assets/fire-alaram-category-icon.svg"
import categoryIcon4 from "../assets/cctv-category-icon.svg"
import categoryIcon5 from "../assets/energy-saving-category-icon.png"


export const homeProductsData = [
    {
        id: 'home_product-1',
        img: images.product_access_control,
        title: 'Access Control',
        desc: "It includes Access Controller, Time Attendance, Biometric Devices & many more...",

        linkTo: 'access-control'
    },
    {
        id: 'home_product-2',
        img: intrusion_product,
        title: 'Intrusion',
        desc: "It includes Panel for bank branch monitoring, ATM Sensor, Sensors for banks...",
        linkTo: 'intrusion'
    },
    {
        id: 'home_product-3',
        img: cctv_product,
        title: 'CCTV System',
        desc: "It includes CCTV Camera, Enterprise Storage, CCTV Multi-location Monitoring...",
        linkTo: 'cctv-system'
    },
    {
        id: 'home_product-4',
        img: energy_system,
        title: 'Energy Monitoring & Saving',
        desc: "It includes Smart Metering, Smart HVAC and AC Control, Light and Signage Control ...",
        linkTo: 'energy-monitoring'
    },
]
export const ProductCategories = [
    {
        icon: categoryIcon1,
        name: "Access Control",
        route: "access-control"
    },
    {
        icon: categoryIcon2,
        name: "Intrusion",
        route: "intrusion"
    },
    {
        icon: categoryIcon3,
        name: "Fire Alarm",
        route: "fire-alarm"
    },
    {
        icon: categoryIcon4,
        name: "CCTV System",
        route: "cctv-system"
    },
    // {
    //     icon: images.product1Icon,
    //     name: "Vehicle Tracking",
    //     route: "vehicle_tracking"
    // },
    {
        icon: categoryIcon5,
        name: "Energy Monitoring and Saving",
        route: "energy-monitoring"
    }

]
export const accessControlData = [
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
        subTitle1: 'No Card No Reader',
        desc1Points: ['Open your doors from anywhere, anytime using your smartphone (iOS or Android) or your Apple Watch.',
            'Thanks to ever-improving GPS technology, the need for card readers has reduced. Instead of using the reader for identification, the user is identified online via the mobile app and the door is operated based on the location of the smartphone.',
            'If cards are still needed for any reason, card readers and mobile access can be integrated.'],
        img: images.electronicLock,
        imgDesc: 'Open Doors from Anywhere',
        subTitle2: 'No Application for Visitors',
        desc2Points: ['Cloud users can grant access to anyone by simply sending a »Key Link«, a standard web link, which can be used by anyone with a smartphone and internet connection.',
            '  No app or registration is required, which makes it extremely useful in situations such as renting the apartment, inviting guests and visitor management.'],
        subTitle3: 'Mix & Match Architecture',
        desc3: 'Wide range of lock compatibility: It can work with any electrical operated EMLOCK, video door phone locks and wireless locks. Mixed architecture is possible',
        desc3Points: ['We can use it with reader (or any technology credentials)',
            'Mobile credential reader',
            'With online & offline controller architecture',
            'Use this via smartphone through internet or Bluetooth'],
        architectureImg: images.electronicLockArchitecture,
        subtitle4: 'Notes:',
        notesDesc: ['If the controller goes offline with cloud software it automatically shifts to bluetooth mode which now enables users to operate the door via bluetooth.',
            'NFC based reader can be used to access the door instead of a direct mobile app if it is necessary to install a reader.',
            'A web based link can be used to open the door for visitors.',
            'We can operate the door remotely based on predefined software settings.'],
        subtitle5: 'Distributed Architecture',
        endUser: ['The user role is typically more participatory and less administrative. Users can do much more than just open doors. For example, using a smart phone users can request instant access or report security-related incidents.',
            'Every employee gets this access to open doors and generate personal reports.'],
        clientUser: [
            'This user is defined as an admin user for the concerned organization.',
            'The roles & permissions can be defined as per user profile within the organization like security, admin, HR etc..'
        ],
        subtitle6: 'Partner/KIAM Admin:',
        partnerDesc: ['This user is assigned to provide services from the CMS team for access management & enrollment of new users onto the system.', 'This user will have specific rights which will be mutually decided with the client to provide service support.'],
        subtitle7: 'Service/System Admin:',
        serviceDesc: ['This user has all the admin rights but no operational rights. These rights are used to provide backend support for any software & system related issues.'],
        systemImg: images.electronicLockSystem,
        systemImgDesc: 'Note : We can Integrate the software data to third-party applications through API for further data processing.'
    },
    {
        icon: images.gpsTracking,
        title: 'Visitor management',
        desc: "Reduces the workload of your reception staff",
        primaryImg: images.visitorsManagementImg,
        points: ['Preregistration, registration and unregistration',
            'ID and business card scanner',
            'Visitor group management',
            'Integrated instructions check',
            'Manual or automatic unregistration function',
            'Visit data inquiry',
            'Visitor self registration'],
        subTitle: 'Security Solutions Add on',
        secImg: images.visitorsManagementSecurity

    },
    {
        icon: images.gpsTracking,
        title: 'Lift Access Control',
        desc1: 'The key benifits of lift access controller is limited access.',
        primaryImg: images.LiftAccessControl,
        subTitle1: 'Higher Security',
        points: ['Secure organization entrance',
            'Secure digital data and records',
            'Secure access to the conference room',
            'Prevent unauthorized entry in sensitive areas',
            'Prevent theft from warehouse',
            'Provide security to employees and assets'],
        subTitle2: 'Higher Productivity',
        points2: ['Accurate employee IN/ Out records',
            'Real time attendee tracking', 'Reduce administrative tasks',
            'Eliminate time theft']

    },
    {
        icon: images.gpsTracking,
        title: 'Door Interlocking Services',
        desc1: 'Door Interlocking Services, controls and monitors door status such as locked, open, according to a set system logic. We use electromagnetic locks to keep the doors locked. The premises that require door interlocking in order to prevent exposure to the outside environment for example pharma factories, bank locker rooms etc also use these systems.',
        primaryImg: images.doorInterlockingSystem,
        desc2: "Our intelligent Door Interlock System is the one which, on request, allows opening of one door at a time.A fully programmable system can be set up for 2, 4 and 8 doors. It lets users program interlocking groups through USB communication."
    }
]
export const intrusionData = [
    {
        icon: images.gpsTracking,
        title: "Panel for bank branch monitoring",
        img: images.panelForBankBranch,
        points: ['Monitoring of Different Inputs in ATM such removal sensors, panic switch, smoke detector as to avoid theft of Cash and provide adequate safety to Customers i.e ATM users',
            'Attendance for Guard, House Keeping, CRA (Cash Replacement Agency) Attendance - using Biometric / Card system',
            ' CCTV event based image capturing for easy first level investigation and Recording for evidences',
            'OTP (One Time Password ) based Access control of Back Room Door used for ATM Utility Equipment storage',
            'HVAC Power / Energy monitoring for power saving',
            ' Control of signage , Lobby Light with auto scheduling as well as manual control from CMS',
            ' ATM Lobby Temperature monitoring for comfort and energy saving',
            'Centralized monitoring and control/ configuration for Total Control on ATM infrastructure from Security perspective',
            'Centralized monitoring required for work flow management viz Alert Management, Vendor management; ticket management, Meaningful MIS report']

    },
    {
        icon: images.gpsTracking,
        title: "Sensors for banks",
        img: images.sensorsForBanksImg,
        subTitle1: 'Monitoring Panel – Sensors',
        points1: ['Monitoring of Different Inputs in ATM such removal sensors, panic switch, smoke detector as to avoid theft of Cash and provide adequate safety to Customers i.e ATM users',
            ' Attendance for Guard, House Keeping, CRA (Cash Replacement Agency) Attendance - using Biometric / Card system',
            ' CCTV event based image capturing for easy first level investigation and Recording for evidences',
            'OTP (One Time Password ) based Access control of Back Room Door used for ATM Utility Equipment storage'
        ],
        subTitle2: "Monitoring Panel – Outputs",
        points2: ['Hooter to alert Guard',
            ' Network switch restart',
            'Access Door Open for front and rear door',
            'Door open for Cheque Drop box',
            ' Door Open for ATM Cash deposit',
            '   AC Power control',
            ' Light control',
            ' Buzzer for Door open too long',
            'CCTV Event based image capture and motion based storage'
        ]
    },
    {
        icon: images.gpsTracking,
        title: "ATM Sensor",
        img: images.atmSensorsImg,
        subTitle: "The key features of ATM sensor are:",
        points: ['Chest Door Open /close',
            'Vibration Detection',
            'Smoke Detection',
            ' back door access',
            'Vibration Detection',
            ' Guard attendance',
            ' House keeping Monitoring',
            'Fog generator for theft prevention']
    },
    {
        icon: images.gpsTracking,
        title: "Perimeter Intrusion Sensors",
        points1: [
            'PIDS providing early intrusion detection while cameras provide real-time assessment capabilities',
            'PIDS is a device or sensor that detects the presence of an intruder attempting to breach the physical perimeter of a property, building, or other secured area'
        ],
        img: images.perimeterIntrusionSensorsImg,
        subTitle1: 'The key features & benifit',
        points2: [
            '            Plug and Play: Simple installation, easy short and training',
            'Volumetric Detection: High level protection',
            'Line of sight: Our sensor feels the treat',
            'Flexible Layout: Can be installed in sections / Continuous according to needs',
            'Whether proof: Immune to weather conditions (Rain , fog , wind ,day & night)'
        ]

    },
    {
        icon: images.gpsTracking,
        title: "PIR Motion Sensors",

    },
    {
        icon: images.gpsTracking,
        title: "Integrated Security Panel"
    }
]
export const fireAlarmData = [
    {

        icon: images.gpsTracking,
        title: "Fire Panels",
    },
    {

        icon: images.gpsTracking,
        title: "Sensors",
    },
    {

        icon: images.gpsTracking,
        title: "Separation System",
    }

]
export const cctvSystemData = [
    {

        icon: images.gpsTracking,
        title: "CCTV Camera",
    },
    {

        icon: images.gpsTracking,
        title: "Enterprise Storage",
    },
    {

        icon: images.gpsTracking,
        title: "CCTV Multi-location Monitoring",
    },
    {

        icon: images.gpsTracking,
        title: "CCTV Auditing and Time Lapse",
    },
    {

        icon: images.gpsTracking,
        title: "Advanced AI based",
    },
    {

        icon: images.gpsTracking,
        title: "E-surveillance Panel",
    }
]
export const energyMonitoringData = [
    {

        icon: images.gpsTracking,
        title: "Smart Metering",
    },
    {

        icon: images.gpsTracking,
        title: "Smart HVAC and AC Control",
    },
    {

        icon: images.gpsTracking,
        title: "Light and Signage Control",
    },
    {

        icon: images.gpsTracking,
        title: "UPS/ DG Monitoring",
    }
]
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
        name: "Access Control",
        route: "access-control"
    },
    {
        icon: images.product1Icon,
        name: "Instrusion",
        route: "instrusion"
    },
    {
        icon: images.product1Icon,
        name: "Fire Alarm",
        route: "fire-alarm"
    },
    {
        icon: images.product1Icon,
        name: "CCTV System",
        route: "cctv-system"
    },
    {
        icon: images.product1Icon,
        name: "Vehicle Tracking",
        route: "vehicle_tracking"
    },
    {
        icon: images.product1Icon,
        name: "Energy Monitoring and Saving",
        route: "vehicle_tracking"
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
import './globals.css'
import BackgroundImage from '@/components/BackgroundImage'

export const metadata = {
    title: 'Pasindu Piyumika - Portfolio',
    description: 'Management Information Systems (MIS) Undergraduate | UI/UX Designer in the Making | UX Researcher | Front-End Development Enthusiast',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
            </head>
            <body>
                <BackgroundImage />
                {children}
            </body>
        </html>
    )
}

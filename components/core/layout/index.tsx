import Head from 'next/head'
import { layoutType } from '../../../assets/types'
import Footer from '../footer'
import Navbar from '../navbar'


export default ({
    children,
    title = 'Default title',
    active = 'Page',
    description = ' A description of app "Description" ',
    footerText = 'Footer'
}:layoutType) => {

    const useTitle = active + ' | ' + title
    const useFooter:string = footerText.toString()
    return (
        <div>
            <Head>
                <title>{useTitle}</title>
                <meta name='description' content={description} />
            </Head>
            <div>
               <Navbar 
                title={{text:'Printers', to:'/', colour:'text-white'}}
                padding='py-4 px-5'
                backgroundColour='bg-primary-500'
               /> 
                <main>
                    {children}
                </main>
                <Footer text={useFooter} />
            </div>
        </div>
    )
}

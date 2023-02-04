import type { NextPage } from 'next'
import Layout from '../components/core/layout'


export default () => {
  return (
    <Layout
      active='Home | printers CRUD'
      description='Home page of the printers CRUD app'
      footerText='Printer CRUD by Brendan de Faria (068 591 6811 / brendan.defaria@gmail.com)'
    >
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}

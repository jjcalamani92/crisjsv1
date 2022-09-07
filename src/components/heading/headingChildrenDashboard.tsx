/* eslint-disable react/no-children-prop */
/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '../../../utils/function'
import { ModalChildrenAntd, ModalChildrenCreatedAntd, ModalChildrenUpdateAntd, ModalSiteAntd } from '../form'
import { AppstoreAddOutlined, EditOutlined, FileAddOutlined, LinkOutlined } from '@ant-design/icons'
import { getChildren, getChildren0, getHeadingTitleDashboard, getQuery, getSite } from '../../../utils/functionV3'
import { useRouter } from 'next/router'
import { useGetSites } from '../../../graphql/react-query/reactQuery'
import { typeEcommerce } from '../../../utils/const'

interface HeadingChildrenDashboard {
  
}

export const HeadingChildrenDashboard:FC<HeadingChildrenDashboard> = ({}) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  
  const { data: sites } = useGetSites();

  const site = getSite(sites!, asPath)
  const children = getChildren(sites!, asPath)
  const title = getHeadingTitleDashboard(sites!, asPath)
  

  const [data, setData] = useState<any>()
  const [openMSD, setOpenMSD] = useState(false)
  const [openMCD, setOpenMCD] = useState(false)
  const [openMCUD, setOpenMCUD] = useState(false)
  const [openMCCD, setOpenMCCD] = useState(false)
  const addHandle = () => {
    setOpenMCCD(true)
  }
  const editHandle= () => {
    {
      query.length > 3 ?
      (
        setData(children),
        setOpenMCUD(true)
      )
      :
      (
        setData(site),
        setOpenMSD(true)
      )
    }
  }
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-4">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <LinkOutlined className='mr-2' style={{ fontSize: '15px' }}/>
            {site?.data.url}
          </div>
          {/* <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Closing on January 9, 2020
          </div> */}
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => editHandle()}
          >
            <EditOutlined className='mr-2' style={{ fontSize: '20px' }}/>
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            View
          </button>
        </span>

        {
          ['ecommerce', 'page'].includes(children?.type!) || query.length === 3
          
           ? 

           <span className="sm:ml-3">
           <button
             type="button"
             className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={() => addHandle()}
           >
             <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }}/>
             { children?.type === 'page' && query.length !== 3 ? 'Add Category' : 'Add Page'}
           </button>
         </span>
            :
            null
        }
        {
          typeEcommerce.map(data => data.value).includes(children?.type!) &&
          <span className="sm:ml-3">
           <button
             type="button"
             className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={() => addHandle()}
           >
            <AppstoreAddOutlined className='mr-2' style={{ fontSize: '20px' }}/>
             Add Product
           </button>
         </span>
        }
        {
          children?.type! === 'blog' &&
          <span className="sm:ml-3">
           <button
             type="button"
             className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={() => addHandle()}
           >
            {/* <FileAddOutlined /> */}
            <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }}/>
             Add Blog
           </button>
         </span>
        }
        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            More
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {
          query.length > 3 ? 
          <ModalChildrenUpdateAntd openMCUD={openMCUD} setOpenMCUD={setOpenMCUD} children={data!} type={children?.type!}  /> 
          :
          <ModalSiteAntd openMSD={openMSD} setOpenMSD={setOpenMSD} site={data!} /> 
        }
        <ModalChildrenCreatedAntd openMCCD={openMCCD} setOpenMCCD={setOpenMCCD} type={children?.type!} /> 

      </div>
    </div>
  )
}

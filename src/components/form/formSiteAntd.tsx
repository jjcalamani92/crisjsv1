import { FC, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Upload,
} from 'antd';
const { Option } = Select;
import type { DefaultOptionType } from 'antd/es/cascader';
import Swal from 'sweetalert2';

import { useQueryClient } from '@tanstack/react-query';
import { SiteV2 } from '../../../interfaces/siteV2';
import { graphQLClientS } from '../../../graphql/react-query/graphQLClient';
import { ADD_SITE, UPDATE_SITE } from '../../../graphql';
import { getQuery, getURL } from '../../../utils/functionV3';




interface ModalSiteAntd {
  openMSD: boolean
  setOpenMSD: React.Dispatch<React.SetStateAction<boolean>>

  site?: SiteV2
}

export const ModalSiteAntd: FC<ModalSiteAntd> = ({ openMSD, setOpenMSD, site }) => {

  
  
  const { asPath, push, replace } = useRouter()
  const query = getQuery(asPath)

  const queryClient = useQueryClient()
  const cancelButtonRef = useRef(null)


  const [form] = Form.useForm();
  const onFinish = async (values: any) => {

    const { phone, prefix, website, ...form } = values
    const data = { ...form, numberPhone: Number(`${values?.prefix}${values?.phone}`), domain: values.website }
    const { client, ...form2 } = data
    // console.log(form2);
    
    
    if (site) {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Site',
        showConfirmButton: false,
        timer: 1500
      })
      await graphQLClientS.request(UPDATE_SITE, {_id: query[2], input: form2 })
      push(asPath)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Site',
        showConfirmButton: false,
        timer: 1500
      })
      await graphQLClientS.request(ADD_SITE, { input: data })
    }
    queryClient.invalidateQueries(["get-sites"])
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 75 }}>
        <Option value="591">+591</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net', '.vercel.app'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );
  return (
    <Transition.Root show={openMSD} as={Fragment}>
      <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={setOpenMSD}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div> */}
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {
                          site ? "Update Site" : "Add Site"
                        }
                      </Dialog.Title>

                    </div>
                  </div>
                  <Form
                    // {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                      name: site ? site.data.name : "",
                      phone: site ? site.data.numberPhone : "",
                      website: site ? site.data.url : "",
                      address: site ? site.data.address : "",
                      type: site ? site.type : "",
                      description: site ? site.data.description : "",

                    }}
                    scrollToFirstError
                    className="grid grid-cols-2 gap-x-3"
                  >
                    <Form.Item
                      name="name"
                      label="Name"
                      className="col-span-2"
                      // style={{ marginBottom: 3 }}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Site Name!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      className="col-span-2"
                      rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                      <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                      name="website"
                      label="Website"
                      className="col-span-2"
                      rules={[{ required: true, message: 'Please input website!' }]}
                    >
                      <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                      </AutoComplete>
                    </Form.Item>

                    <Form.Item
                      name="address"
                      label="Address"
                      className='col-span-2'
                      rules={[{ required: true, message: 'Please input Description' }]}
                    >
                      <Input.TextArea rows={4} maxLength={1000} />
                    </Form.Item>
                    <Form.Item
                      name="type"
                      label="Type"
                      rules={[{ required: true, message: 'Please select type!' }]}
                    >
                      <Select placeholder="select your type">
                        <Option value="ecommerce">E-commerce</Option>
                        <Option value="education">Education</Option>
                        <Option value="marketing">Marketing</Option>
                        <Option value="food">Food</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="description"
                      label="Description"
                      className='col-span-2'
                      rules={[{ required: true, message: 'Please input Description' }]}
                    >
                      <Input.TextArea rows={5} showCount maxLength={1000} />
                    </Form.Item>

                    {
                      !site && 
                    <Form.Item
                    name="client"
                    label="Client"
                    className="col-span-2"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Site Client!',
                      },
                    ]}
                    >
                      <Input />
                    </Form.Item>
                    }








                    <div className=" col-span-2 flex  justify-end gap-3">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:w-auto sm:text-sm"
                        onClick={() => setOpenMSD(false)}
                      >
                        {
                          site ? 'Updated'
                            : 'Created'
                        }
                      </button>
                      <button
                        type="button"
                        className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:w-auto sm:text-sm"
                        onClick={() => setOpenMSD(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>

                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

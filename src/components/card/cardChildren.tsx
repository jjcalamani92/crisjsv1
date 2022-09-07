import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import React, { FC } from 'react';
import 'antd/lib/card/style/index.css'
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import { useQueryClient } from '@tanstack/react-query';
import { ChildrenV2, SiteV2 } from '../../../interfaces/siteV2';
import { graphQLClientS } from '../../../graphql/react-query/graphQLClient';
import { DELETE_CHILDREN_0, DELETE_CHILDREN_1, DELETE_CHILDREN_2, DELETE_CHILDREN_3, DELETE_CHILDREN_4, DELETE_CHILDREN_5, DELETE_SITE } from '../../../graphql';
import { getQuery } from '../../../utils/functionV3';

const { Meta } = Card;
interface CardChildrenDashboard {
  children: ChildrenV2
}

export const CardChildrenDashboard:FC<CardChildrenDashboard> = ({ children }) => {
  const { push, asPath} = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient()
  

  const onEdit = () => {
    push(`${asPath}/${children.slug}`)
  }
  const onDelete =  async () => {
    // console.log('onClick Delete');
    
    Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed ) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El sitio ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					})
          let REMOVE!: string
          let VARIABLES

          if (query.length === 8) {
            REMOVE = DELETE_CHILDREN_5
            VARIABLES = {_id: query[2], input: {children_uid_0: query[3], children_uid_1: query[4], children_uid_2: query[5], children_uid_3: query[6], children_uid_4: query[7], children_uid_5: children.uid}}
          }
          if (query.length === 7) {
            REMOVE = DELETE_CHILDREN_4
            VARIABLES = {_id: query[2], input: {children_uid_0: query[3], children_uid_1: query[4], children_uid_2: query[5], children_uid_3: query[6], children_uid_4: children.uid}}
          }
          if (query.length === 6) {
            REMOVE = DELETE_CHILDREN_3
            VARIABLES = {_id: query[2], input: {children_uid_0: query[3], children_uid_1: query[4], children_uid_2: query[5], children_uid_3: children.uid}}
          }
          if (query.length === 5) {
            REMOVE = DELETE_CHILDREN_2
            VARIABLES = {_id: query[2], input: {children_uid_0: query[3], children_uid_1: query[4], children_uid_2: children.uid}}
          }
          if (query.length === 4) {
            REMOVE = DELETE_CHILDREN_1
            VARIABLES = {_id: query[2], input: {children_uid_0: query[3], children_uid_1: children.uid}}
          }
          if (query.length === 3) {
            REMOVE = DELETE_CHILDREN_0
            VARIABLES = {_id: query[2], input: {children_uid_0: children.uid}}
          }
        await graphQLClientS.request(DELETE_CHILDREN_0, VARIABLES )
        queryClient.invalidateQueries(["get-sites"])

			}
		})
  }
  return (
        <Card
          size="small"
          className='drop-shadow-lg'
          cover={
            <Image
              width={400}
              height={400}
              src={"/img.webp"}
              alt={"description image"}
            />
          }
          actions={ getQuery(asPath)[1] !== 'products' ? [
            <EditOutlined key="edit" onClick={onEdit} />,
            <DeleteOutlined key="delete" onClick={() => onDelete()} />,
          ]: [
            <PlusCircleOutlined key="products" onClick={onEdit}/>
          ]}
        >
          <Meta
            title={children.seo.name}
            // description={children.seo.description}

          />
        </Card>
      
  )
}

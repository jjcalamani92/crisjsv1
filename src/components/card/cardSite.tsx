import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import React, { FC } from 'react';
import 'antd/lib/card/style/index.css'
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import { useQueryClient } from '@tanstack/react-query';
import { SiteV2 } from '../../../interfaces/siteV2';
import { graphQLClientS } from '../../../graphql/react-query/graphQLClient';
import { DELETE_SITE } from '../../../graphql';
import { getQuery } from '../../../utils/functionV3';

const { Meta } = Card;
interface CardSiteDashboard {
  site: SiteV2
}

export const CardSiteDashboard:FC<CardSiteDashboard> = ({ site}) => {
  const { push, asPath} = useRouter()
  const queryClient = useQueryClient()
  

  const onEdit = () => {
    push(`${asPath}/${site._id}`)
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

        await graphQLClientS.request(DELETE_SITE,  {_id: site?._id})
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
            title={site.data.name}
            // description={site.data.description}

          />
        </Card>
      
  )
}

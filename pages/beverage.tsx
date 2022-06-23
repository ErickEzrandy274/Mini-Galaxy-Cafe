import React from 'react'
import MainLayout from '../components/modules/MainLayout/MainLayout';
import ProductPage from '../components/modules/ProductPage/ProductPage';
import { getData, setType } from '../components/utils/function/function';
import { dataProps } from './api/hello';

setType('beverage')

const beverage: React.FC<dataProps> = ({ data }) => {
    return (
        <MainLayout>
          <ProductPage data={data} type='Beverages' />
        </MainLayout>
    )
};

export const getServerSideProps = getData

export default beverage;
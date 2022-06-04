import React from 'react'
import BeveragePage from '../components/modules/BeveragePage/BeveragePage';
import MainLayout from '../components/modules/MainLayout/MainLayout';
import { getData, setType } from '../components/utils/function';
import { dataProps } from './api/hello';

setType('beverage')

const beverage: React.FC<dataProps> = ({ data }) => {
    return (
        <MainLayout>
          <BeveragePage data={data} />
        </MainLayout>
    )
};

export const getServerSideProps = getData

export default beverage;
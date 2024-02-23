import { baseApi } from "../baseApi";


const saleHistoryApi = baseApi.injectEndpoints({
  
    endpoints: (builder) => ({
         
        allSales: builder.query({
            query: () => ({
                url: '/sales/all-sales',
                method: 'GET',
            }),
        providesTags:['saleHistory']
        }),
        dailySales: builder.query({
            query: () => ({
                url: '/sales/daily',
                method: 'GET',
            }),
        providesTags:['saleHistory']
        }),

        weeklySales: builder.query({
            query: () => ({
                url: '/sales/weekly',
                method: 'GET',
            }),
            providesTags:['saleHistory']
        }),

        monthlySales: builder.query({
            query: () => ({
                url: '/sales/monthly',
                method: 'GET',
            }),
            providesTags:['saleHistory']
        }),

        yearlySales: builder.query({
            query: () => ({
                url: '/sales/yearly',
                method: 'GET',
            }),
            providesTags:['saleHistory']
        }),
        saleProduct: builder.mutation({
            query: (productToSale) => ({
              
                url: '/sales/sale-product',
                method: "POST",
                body:productToSale
            }) ,
            invalidatesTags:['saleHistory','products']
        }),

    

        
       
    })
})

export const { useAllSalesQuery, useSaleProductMutation, useDailySalesQuery,useWeeklySalesQuery,useMonthlySalesQuery,useYearlySalesQuery} = saleHistoryApi; 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'a486743560msh2d18569b1d9400bp1382a9jsn64554cd5c4cc')
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopCharts: builder.query({query: ()=>'/charts/world'}),
        getSongDetails: builder.query({query: ({songid}) =>`/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({songid})=> `tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),

    }),
})

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery
} = shazamCoreApi
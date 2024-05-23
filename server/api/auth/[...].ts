// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'Ov23liQ0Ff9e2Ji57dIS',
           clientSecret: '0c2aaf94ea5b94c18cbaf74de8a6a176695ae65d'
        })
    ]
})
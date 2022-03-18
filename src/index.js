import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import Employees from "./components/pages/Employees";
import {QueryClient, QueryClientProvider} from "react-query";
import Main from "./components/pages/Main";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    }
})

const Providers = ({children}) => (
    <BrowserRouter>
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ChakraProvider>
    </BrowserRouter>
)

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="employees" element={<Employees/>}/>
                </Route>
            </Routes>
        </Providers>
    </React.StrictMode>,
    document.getElementById('root')
);

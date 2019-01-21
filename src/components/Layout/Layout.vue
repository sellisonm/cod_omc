<template>
    <div>
        <div>
            <Header />
        </div>

        <div>
            <b-container fluid >
                <b-row style="height: -webkit-fill-available">
                    <b-col cols="1">
                        <Sidebar />
                    </b-col>
                    <b-col>
                        <router-view style="background-color: white; height: 100%"/>
                    </b-col>
                </b-row>
            </b-container>
        </div>

    </div>    

</template>

<script>


import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import './Layout.css';

export default {
    components: {
        Header,
        Sidebar
    }
}
</script>


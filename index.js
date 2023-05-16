import 'zone.js';   // for angular subapp
import { initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';
import render from './render/ReactRender';

render({ loading: true });

const loader = (loading) => render({ loading });

registerMicroApps(
    [
        {
            name: 'react',
            entry: '//localhost:3000',
            container: '#subapp-viewport',
            loader,
            activeRule: '/react',
        },
        {
            name: 'angular',
            entry: '//localhost:4200',
            container: '#subapp-viewport',
            loader,
            activeRule: '/angular',
        },
    ],
    {
        beforeLoad: [
            (app) => {
                console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
            },
        ],
        beforeMount: [
            (app) => {
                console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            },
        ],
        afterUnmount: [
            (app) => {
                console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            },
        ],
    },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    },
});

setDefaultMountApp('/react');

start();

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});

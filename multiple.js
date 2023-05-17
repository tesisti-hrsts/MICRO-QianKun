import 'zone.js';   // for angular subapp
import { loadMicroApp } from 'qiankun';

loadMicroApp({ name: 'react', entry: '//localhost:3000', container: '#react-app' });
loadMicroApp({ name: 'angular', entry: '//localhost:4200', container: '#angular-app' });
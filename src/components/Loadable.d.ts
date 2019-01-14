import React, { Component } from 'react';

export function setDefaultLoadingComponent(component:React.ReactNode) {}

export function Loadable(loader:Function, isPreload:boolean, LoadingComponent:React.ReactNode):Function;

export default Loadable;
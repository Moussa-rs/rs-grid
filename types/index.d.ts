import { Plugin, DefineComponent } from 'vue';

export const GridLayout: Exclude<Plugin['install'], undefined> | DefineComponent;

export const GridItem: Exclude<Plugin['install'], undefined> | DefineComponent;

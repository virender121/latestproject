import React from 'react'
import Input from './Input';



export default {
    title: 'Component/Input',
    parameters: {
        component: Input,
        componentSubtitle:'hjhjhwyuhdnnwasu8jskkdagghygygbkjwjdoioknsdangyytyedyuuuueduidhjdn',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Input {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Input'
}
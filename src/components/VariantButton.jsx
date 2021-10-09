import styled from 'styled-components';
import { variant } from 'styled-system';

const VariantButton = styled('button')(
    {
        fontFamily: 'inherit',
    },
    variant({
        prop: 'button-type',
        variants: {
            primary: {
                color: 'red',
                bg: 'green',
            },
            secondary: {
                color: 'black',
                bg: 'blue',
            },
        },
    }),
);

export default VariantButton;

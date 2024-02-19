import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    /**
     * the html tag you want to create.
     * @default "section"
     */
    section: keyof JSX.IntrinsicElements;
    id: string;
    className: string;
}
declare const Modals: FC<Props>;
export default Modals;

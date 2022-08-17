import tw from 'twin.macro';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import FlashMessageRender from '@/components/FlashMessageRender';
import ContentContainer from '@/components/elements/ContentContainer';

export interface PageContentBlockProps {
    title?: string;
    className?: string;
    showFlashKey?: string;
}

const PageContentBlock: React.FC<PageContentBlockProps> = ({ title, showFlashKey, className, children }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    return (
        <CSSTransition timeout={150} classNames={'fade'} appear in>
            <div css={tw`my-4`}>
                <ContentContainer className={className}>
                    {showFlashKey && <FlashMessageRender byKey={showFlashKey} css={tw`mb-4`} />}
                    {children}
                </ContentContainer>
                <ContentContainer css={tw`text-sm text-center my-4`}>
                    <p css={tw`text-neutral-500 text-xs mt-6 sm:float-left`}>
            &copy; 2022 <a href={'https://dashypanel.txcproject.com'}>Dashy</a> made by{' '}
            <a href={'https://txcproject.com'}>Xaloc Media.</a>
        </p>
        <p css={tw`text-neutral-500 text-xs mt-6 sm:float-right`}>
            <a href={'https://dashypanel.txcproject.com'}> Site </a>
        </p>
                </ContentContainer>
            </div>
        </CSSTransition>
    );
};

export default PageContentBlock;

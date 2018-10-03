import React from 'react';

/**
 * Link component is responsible for encapsulating link render.
 * @example
 * const onClickLink = function(source, target) {
 *      window.alert(`Clicked link between ${source} and ${target}`);
 * };
 *
 * const onRightClickLink = function(event, source, target) {
 *      window.alert(`Right clicked link between ${source} and ${target}`);
 * };
 *
 * const onMouseOverLink = function(source, target) {
 *      window.alert(`Mouse over in link between ${source} and ${target}`);
 * };
 *
 * const onMouseOutLink = function(source, target) {
 *      window.alert(`Mouse out link between ${source} and ${target}`);
 * };
 *
 * <Link
 *     d="M1..."
 *     source='idSourceNode'
 *     target='idTargetNode'
 *     x1=22
 *     y1=22
 *     x2=22
 *     y2=22
 *     markerId='marker-small'
 *     strokeWidth=1.5
 *     stroke='green'
 *     className='link'
 *     opacity=1
 *     mouseCursor='pointer'
 *     onClickLink={onClickLink}
 *     onRightClickLink={onRightClickLink}
 *     onMouseOverLink={onMouseOverLink}
 *     onMouseOutLink={onMouseOutLink} />
 */
export default class Link extends React.Component {
    /**
     * Handle link click event.
     * @returns {undefined}
     */
    handleOnClickLink = () => this.props.onClickLink && this.props.onClickLink(this.props.source, this.props.target);

    /**
     * Handle link right click event.
     * @param {Object} event - the event object
     * @returns {undefined}
     */
    handleOnRightClickLink = event => {
        this.props.onRightClickLink && this.props.onRightClickLink(event, this.props.source, this.props.target);
    };

    /**
     * Handle mouse over link event.
     * @returns {undefined}
     */
    handleOnMouseOverLink = () =>
        this.props.onMouseOverLink && this.props.onMouseOverLink(this.props.source, this.props.target);

    /**
     * Handle mouse out link event.
     * @returns {undefined}
     */
    handleOnMouseOutLink = () =>
        this.props.onMouseOutLink && this.props.onMouseOutLink(this.props.source, this.props.target);

    render() {
        const lineStyle = {
            strokeWidth: this.props.strokeWidth,
            stroke: this.props.stroke,
            opacity: this.props.opacity,
            fill: 'none',
            cursor: this.props.mouseCursor
        };

        const lineProps = {
            className: this.props.className,
            d: this.props.d,
            onClick: this.handleOnClickLink,
            onContextMenu: this.handleOnRightClickLink,
            onMouseOut: this.handleOnMouseOutLink,
            onMouseOver: this.handleOnMouseOverLink,
            style: lineStyle
        };

        if (this.props.markerId) {
            lineProps.markerEnd = `url(#${this.props.markerId})`;
        }

        return <path {...lineProps} />;
    }
}

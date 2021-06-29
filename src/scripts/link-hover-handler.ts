export function handleLinkHover(element: HTMLElement): void {
    let mouseIsLeft = false;
    let animationIsEnded = false;

    element.addEventListener('mouseenter', () => {
        mouseIsLeft = false;
        animationIsEnded = false;
        element.classList.remove('mouse-leave');
        element.classList.add('mouse-enter');

        setTimeout(() => {
            animationIsEnded = true;
            if (mouseIsLeft) {
                element.classList.add('mouse-leave');
                element.classList.remove('mouse-enter');
            }
        }, 300);
    });

    element.addEventListener('mouseleave', () => {
        if (animationIsEnded) {
            element.classList.add('mouse-leave');
            element.classList.remove('mouse-enter');
        }

        mouseIsLeft = true;
    });
}

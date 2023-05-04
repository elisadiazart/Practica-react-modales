import { createPortal } from 'react-dom';
import {
	StyledModalContainer,
	StyledMessageContainer,
	StyledCloseButton
} from './styles';

const Modal = ({ setModal, children }) => {
	if (!children) return;
	return createPortal(
		<StyledModalContainer>
			<StyledMessageContainer>
				<StyledCloseButton onClick={() => setModal(false)}>x</StyledCloseButton>
				{children}
			</StyledMessageContainer>
		</StyledModalContainer>,
		document.getElementById('modal')
	);
};

export default Modal;

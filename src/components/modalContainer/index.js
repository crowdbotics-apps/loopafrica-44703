import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import CommonStyle from '../../utils/commonStyle';

const ModalContainer = props => {
  const {modalVisible, modalClose, children, type} = props;
  let OuterCompo = modalClose ? TouchableOpacity : View;
  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <OuterCompo
        style={[
          styles.modalView,
          type === 'marker'
            ? {
                ...CommonStyle.centerEnd,
              }
            : type === 'notification'
            ? {
                ...CommonStyle.centerStart,
              }
            : {
                ...CommonStyle.center,
              },
        ]}
        onPress={() => modalClose()}
        activeOpacity={1}>
        <View style={styles.modalSubContainer}>{children}</View>
      </OuterCompo>
    </Modal>
  );
};

export default ModalContainer;

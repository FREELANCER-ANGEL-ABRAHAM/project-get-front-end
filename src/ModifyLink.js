import React from 'react';
import LinkForm from './components/LinkForm';

function ModifyLink() {

  return (
    <LinkForm isModifyActive={true} buttonText="Modificar" />
  );
}

export default ModifyLink;
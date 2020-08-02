import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, name, type, value, onChange,
}) {
  const formId = `id-${name}`;

  return (
    <div>
      <label htmlFor={formId}>
        {label}
        :
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;

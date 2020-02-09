import React from 'react';

interface StandardComponentProps {
  str?: string;
}

const Test = ({ str }: StandardComponentProps) => <div>{str}</div>;

export default Test;

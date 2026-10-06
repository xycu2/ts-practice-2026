function testOk(status: 'ok' | 'error') {
  if (status === 'ok') {
    return 200
  }

  if (status === 'error') {
    return 400
  }

  assertExhaustiveness(status)
}
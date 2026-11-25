import type { Register } from 'claude-code'

export const register: Register = on => {
  on('ui.render', { component: 'Welcome' }, async ($, e, next) => {
    const { Box, Text } = $.ui.resolve(e)
    const logo = await next(e)

    // Tweak marginLeft to line the hat up over the mascot's head.
    return (
      <Box flexDirection="column">
        <Box marginLeft={1} flexDirection="column">
          <Text color="white">{'   ██'}</Text>
          <Text color="red">{'  ▄██▄'}</Text>
          <Text color="red">{' ▄████▄'}</Text>
          <Text color="white">{'████████'}</Text>
        </Box>
        {logo}
      </Box>
    )
  })
}

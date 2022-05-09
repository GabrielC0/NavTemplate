import * as React from "react"
import { Text } from "react-native"
import * as renderer from "react-test-renderer"
import {renderToSVGString, renderToCanvas} from "render-react-native-to-image"

describe("Fixtures", () => {
  it("does some simple JSX", () => {
    const component = renderer.create(<Text>Hello</Text>).toJSON()
    expect(component).toMatchSnapshot()
    renderToCanvas('./example.png', component)
    fs.writeFileSync('./example.svg', renderToSVGString(component))
  })
})
class TowerNode {
  id: number;
  children = new Array<TowerNode>();
  constructor(id: number) {
    this.id = id;
  }
  private findNode(nodeId: number): TowerNode | undefined {
    if (this.id == nodeId) return this;
    for (const child of this.children) {
      const node = child.findNode(nodeId);
      if (node) return node;
    }
  }
  connectWires(wires: Array<[number, number]>): TowerNode {
    const copiedWires = wires.slice();
    while (copiedWires.length) {
      const currentWire = copiedWires.shift()!;
      let node = this.findNode(currentWire[0]);
      let useShift = false;
      if (!node) {
        node = this.findNode(currentWire[1]);
        useShift = true;
      }
      node!.children.push(
        new TowerNode(useShift ? currentWire[0] : currentWire[1])
      );
    }
    return this;
  }
  countExcept(wire: [number, number]): number {
    let count = 1;
    for (const child of this.children) {
      if (
        (this.id == wire[0] && child.id == wire[1]) ||
        (this.id == wire[1] && child.id == wire[0])
      )
        continue;
      count += child.countExcept(wire);
    }
    return count;
  }
}

// [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
export const solution = (n: number, wires: Array<[number, number]>): number =>
  wires
    .map(
      function (this: TowerNode, eachWire: [number, number]) {
        return Math.abs(n - 2 * this.countExcept(eachWire));
      }.bind(
        new TowerNode(1).connectWires(
          wires.sort((front, rear) => front[0] - rear[0])
        )
      )
    )
    .sort()[0];

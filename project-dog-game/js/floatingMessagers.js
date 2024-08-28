export class FloatingMessage {
  constructor(value, x, y, targetX, targetY) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.markedForDeletion = false;
    this.timer = 0;
  }

  update() {
    // Update position
    const speed = 0.03; // Adjust speed as needed
    this.x += (this.targetX - this.x) * speed;
    this.y += (this.targetY - this.y) * speed;
    
    // Increment timer
    this.timer++;
    if (this.timer > 100) this.markedForDeletion = true;
  }

  draw(context) {
    context.font = '20px Creepster';
    context.fillStyle = 'white';
    context.fillText(this.value, this.x, this.y);

    context.fillStyle = 'black';
    context.fillText(this.value, this.x + 2, this.y + 2);
  }
}

var frames = {
    "brickBlack": {
        "frame": {"x": 10, "y": 10, "w": 144, "h": 144}
    },
    "brickGray": {
        "frame": {"x": 164, "y": 10, "w": 144, "h": 144}
    },
    "enemy1Dead": {
        "frame": {"x": 318, "y": 10, "w": 144, "h": 72}
    },
    "enemy1Move001": {
        "frame": {"x": 472, "y": 10, "w": 144, "h": 144}
    },
    "enemy1Move002": {
        "frame": {"x": 626, "y": 10, "w": 144, "h": 144}
    },
    "enemy1Move003": {
        "frame": {"x": 780, "y": 10, "w": 144, "h": 144}
    },
    "enemy1Move004": {
        "frame": {"x": 10, "y": 164, "w": 144, "h": 144}
    },
    "enemy2Move001": {
        "frame": {"x": 164, "y": 164, "w": 144, "h": 108}
    },
    "enemy2Move002": {
        "frame": {"x": 318, "y": 164, "w": 144, "h": 108}
    },
    "enemy2Move00g": {
        "frame": {"x": 472, "y": 164, "w": 144, "h": 108}
    },
    "enemy2Move004": {
        "frame": {"x": 318, "y": 164, "w": 144, "h": 108}
    },
    "fire001": {
        "frame": {"x": 626, "y": 164, "w": 144, "h": 108}
    },
    "fire002": {
        "frame": {"x": 10, "y": 318, "w": 144, "h": 108}
    },
    "fire003": {
        "frame": {"x": 780, "y": 164, "w": 144, "h": 108}
    },
    "fire004": {
        "frame": {"x": 10, "y": 318, "w": 144, "h": 108}
    },
    "groundBottom": {
        "frame": {"x": 164, "y": 318, "w": 144, "h": 144}
    },
    "groundTop": {
        "frame": {"x": 318, "y": 318, "w": 144, "h": 144}
    },
    "ice001": {
        "frame": {"x": 472, "y": 318, "w": 144, "h": 144}
    },
    "ice002": {
        "frame": {"x": 626, "y": 318, "w": 144, "h": 144}
    },
    "ice003": {
        "frame": {"x": 780, "y": 318, "w": 144, "h": 144}
    },
    "ice004": {
        "frame": {"x": 10, "y": 472, "w": 144, "h": 144}
    },
    "playerJumpBack001": {
        "frame": {"x": 164, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpBack002": {
        "frame": {"x": 318, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpBack003": {
        "frame": {"x": 472, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpBack004": {
        "frame": {"x": 626, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpBack005": {
        "frame": {"x": 472, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpBack006": {
        "frame": {"x": 318, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpFront001": {
        "frame": {"x": 780, "y": 472, "w": 144, "h": 194}
    },
    "playerJumpFront002": {
        "frame": {"x": 318, "y": 676, "w": 144, "h": 194}
    },
    "playerJumpFront003": {
        "frame": {"x": 164, "y": 676, "w": 144, "h": 194}
    },
    "playerJumpFront004": {
        "frame": {"x": 10, "y": 676, "w": 144, "h": 194}
    },
    "playerJumpFront005": {
        "frame": {"x": 164, "y": 676, "w": 144, "h": 194}
    },
    "playerJumpFront006": {
        "frame": {"x": 318, "y": 676, "w": 144, "h": 194}
    },
    "playerWalkBack001": {
        "frame": {"x": 472, "y": 676, "w": 144, "h": 194}
    },
    "playerWalkBack002": {
        "frame": {"x": 626, "y": 676, "w": 144, "h": 194}
    },
    "playerWalkBack003": {
        "frame": {"x": 780, "y": 676, "w": 144, "h": 194}
    },
    "playerWalkBack004": {
        "frame": {"x": 10, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkBack005": {
        "frame": {"x": 164, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkBack006": {
        "frame": {"x": 318, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkFront001": {
        "frame": {"x": 472, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkFront002": {
        "frame": {"x": 626, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkFront003": {
        "frame": {"x": 780, "y": 880, "w": 144, "h": 194}
    },
    "playerWalkFront004": {
        "frame": {"x": 10, "y": 1084, "w": 144, "h": 194}
    },
    "playerWalkFront005": {
        "frame": {"x": 164, "y": 1084, "w": 144, "h": 194}
    },
    "playerWalkFront006": {
        "frame": {"x": 318, "y": 1084, "w": 144, "h": 194}
    }
};

var animationPlayer = {
        idleForward: [
            frames.playerWalkFront002.frame.x,
            frames.playerWalkFront002.frame.y,
            frames.playerWalkFront002.frame.w,
            frames.playerWalkFront002.frame.h,

            frames.playerWalkFront006.frame.x,
            frames.playerWalkFront006.frame.y,
            frames.playerWalkFront006.frame.w,
            frames.playerWalkFront006.frame.h
        ],
        idleBackward: [
            frames.playerWalkBack002.frame.x,
            frames.playerWalkBack002.frame.y,
            frames.playerWalkBack002.frame.w,
            frames.playerWalkBack002.frame.h,

            frames.playerWalkBack006.frame.x,
            frames.playerWalkBack006.frame.y,
            frames.playerWalkBack006.frame.w,
            frames.playerWalkBack006.frame.h
        ],
        walkForward: [
            frames.playerWalkFront001.frame.x,
            frames.playerWalkFront001.frame.y,
            frames.playerWalkFront001.frame.w,
            frames.playerWalkFront001.frame.h,

            frames.playerWalkFront002.frame.x,
            frames.playerWalkFront002.frame.y,
            frames.playerWalkFront002.frame.w,
            frames.playerWalkFront002.frame.h,

            frames.playerWalkFront003.frame.x,
            frames.playerWalkFront003.frame.y,
            frames.playerWalkFront003.frame.w,
            frames.playerWalkFront003.frame.h,

            frames.playerWalkFront004.frame.x,
            frames.playerWalkFront004.frame.y,
            frames.playerWalkFront004.frame.w,
            frames.playerWalkFront004.frame.h,

            frames.playerWalkFront005.frame.x,
            frames.playerWalkFront005.frame.y,
            frames.playerWalkFront005.frame.w,
            frames.playerWalkFront005.frame.h,

            frames.playerWalkFront006.frame.x,
            frames.playerWalkFront006.frame.y,
            frames.playerWalkFront006.frame.w,
            frames.playerWalkFront006.frame.h
        ],
        walkBackward: [
            frames.playerWalkBack001.frame.x,
            frames.playerWalkBack001.frame.y,
            frames.playerWalkBack001.frame.w,
            frames.playerWalkBack001.frame.h,

            frames.playerWalkBack002.frame.x,
            frames.playerWalkBack002.frame.y,
            frames.playerWalkBack002.frame.w,
            frames.playerWalkBack002.frame.h,

            frames.playerWalkBack003.frame.x,
            frames.playerWalkBack003.frame.y,
            frames.playerWalkBack003.frame.w,
            frames.playerWalkBack003.frame.h,

            frames.playerWalkBack004.frame.x,
            frames.playerWalkBack004.frame.y,
            frames.playerWalkBack004.frame.w,
            frames.playerWalkBack004.frame.h,

            frames.playerWalkBack005.frame.x,
            frames.playerWalkBack005.frame.y,
            frames.playerWalkBack005.frame.w,
            frames.playerWalkBack005.frame.h,

            frames.playerWalkBack006.frame.x,
            frames.playerWalkBack006.frame.y,
            frames.playerWalkBack006.frame.w,
            frames.playerWalkBack006.frame.h
        ],
        jumpForward: [
            frames.playerJumpFront001.frame.x,
            frames.playerJumpFront001.frame.y,
            frames.playerJumpFront001.frame.w,
            frames.playerJumpFront001.frame.h,

            frames.playerJumpFront002.frame.x,
            frames.playerJumpFront002.frame.y,
            frames.playerJumpFront002.frame.w,
            frames.playerJumpFront002.frame.h,

            frames.playerJumpFront003.frame.x,
            frames.playerJumpFront003.frame.y,
            frames.playerJumpFront003.frame.w,
            frames.playerJumpFront003.frame.h,

            frames.playerJumpFront004.frame.x,
            frames.playerJumpFront004.frame.y,
            frames.playerJumpFront004.frame.w,
            frames.playerJumpFront004.frame.h,

            frames.playerJumpFront005.frame.x,
            frames.playerJumpFront005.frame.y,
            frames.playerJumpFront005.frame.w,
            frames.playerJumpFront005.frame.h,

            frames.playerJumpFront006.frame.x,
            frames.playerJumpFront006.frame.y,
            frames.playerJumpFront006.frame.w,
            frames.playerJumpFront006.frame.h
        ],
        jumpBackward: [
            frames.playerJumpBack001.frame.x,
            frames.playerJumpBack001.frame.y,
            frames.playerJumpBack001.frame.w,
            frames.playerJumpBack001.frame.h,

            frames.playerJumpBack002.frame.x,
            frames.playerJumpBack002.frame.y,
            frames.playerJumpBack002.frame.w,
            frames.playerJumpBack002.frame.h,

            frames.playerJumpBack003.frame.x,
            frames.playerJumpBack003.frame.y,
            frames.playerJumpBack003.frame.w,
            frames.playerJumpBack003.frame.h,

            frames.playerJumpBack004.frame.y,
            frames.playerJumpBack004.frame.w,
            frames.playerJumpBack004.frame.h,
            frames.playerJumpBack004.frame.x,

            frames.playerJumpBack005.frame.x,
            frames.playerJumpBack005.frame.y,
            frames.playerJumpBack005.frame.w,
            frames.playerJumpBack005.frame.h,

            frames.playerJumpBack006.frame.x,
            frames.playerJumpBack006.frame.y,
            frames.playerJumpBack006.frame.w,
            frames.playerJumpBack006.frame.h
        ]
    },
    animationEnemyOne = {
        move: [
            frames.enemy1Move001.frame.x,
            frames.enemy1Move001.frame.y,
            frames.enemy1Move001.frame.w,
            frames.enemy1Move001.frame.h,

            frames.enemy1Move002.frame.x,
            frames.enemy1Move002.frame.y,
            frames.enemy1Move002.frame.w,
            frames.enemy1Move002.frame.h,

            frames.enemy1Move003.frame.x,
            frames.enemy1Move003.frame.y,
            frames.enemy1Move003.frame.w,
            frames.enemy1Move003.frame.h,

            frames.enemy1Move004.frame.y,
            frames.enemy1Move004.frame.w,
            frames.enemy1Move004.frame.h,
            frames.enemy1Move004.frame.x
        ]
    },
    animationEnemyTwo = {
        move: [
            frames.enemy2Move001.frame.x,
            frames.enemy2Move001.frame.y,
            frames.enemy2Move001.frame.w,
            frames.enemy2Move001.frame.h,

            frames.enemy2Move002.frame.x,
            frames.enemy2Move002.frame.y,
            frames.enemy2Move002.frame.w,
            frames.enemy2Move002.frame.h,

            frames.enemy2Move003.frame.x,
            frames.enemy2Move003.frame.y,
            frames.enemy2Move003.frame.w,
            frames.enemy2Move003.frame.h,

            frames.enemy2Move004.frame.y,
            frames.enemy2Move004.frame.w,
            frames.enemy2Move004.frame.h,
            frames.enemy2Move004.frame.x
        ]
    },
    animationFire = {
        idle: [
            frames.fire001.frame.x,
            frames.fire001.frame.y,
            frames.fire001.frame.w,
            frames.fire001.frame.h,

            frames.fire002.frame.x,
            frames.fire002.frame.y,
            frames.fire002.frame.w,
            frames.fire002.frame.h,

            frames.fire003.frame.x,
            frames.fire003.frame.y,
            frames.fire003.frame.w,
            frames.fire003.frame.h,

            frames.fire004.frame.y,
            frames.fire004.frame.w,
            frames.fire004.frame.h,
            frames.fire004.frame.x
        ]
    },
    animationICe = {
        idle: [
            frames.ice001.frame.x,
            frames.ice001.frame.y,
            frames.ice001.frame.w,
            frames.ice001.frame.h,

            frames.ice002.frame.x,
            frames.ice002.frame.y,
            frames.ice002.frame.w,
            frames.ice002.frame.h,

            frames.ice003.frame.x,
            frames.ice003.frame.y,
            frames.ice003.frame.w,
            frames.ice003.frame.h,

            frames.ice004.frame.y,
            frames.ice004.frame.w,
            frames.ice004.frame.h,
            frames.ice004.frame.x
        ]
    };

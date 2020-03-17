### Linux

进程的类型
    前台进程   后台进程   守护进程

    前台进程： 具有终端，可以和用户交互的进程
    后台进程： 没有占用终端的就是后台进程，基本不和用户交互，优先级比前台进程低
    守护进程： 特殊的后台进程，很多守护进程在系统引导的时候启动，一直运行知道系统关闭 (进程名字以"d"结尾的一般都是守护进程)

进程的标记
    进程ID

    进程的状态标记
        R   (TASK_RUNNING),进程正处于运行状态
        S   (TASK_INTERRUPTIBLE),进程正处于睡眠状态
        D   (TASK_UNINTERRUPTIBLE),进程正处于I/O等待的睡眠状态
        T   (TASK_STOPPED),进程正处于暂停状态
        Z   (TASK_DEAD or EXIT_ZOMBIE),进程正处于退出状态


操作Linux进程的相关命令
    ps命令  ps -aux     ps -u root      ps -aux | grep
    top命令
    kill命令    kill 9 信号可以无条件终止进程